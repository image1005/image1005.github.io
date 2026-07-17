<template>
    <div ref="live2dContainer" class="oh-my-live2d"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const live2dContainer = ref<HTMLElement | null>(null)
let oml2dInstance: any = null
let moveTarget: HTMLElement | null = null
let dragHandle: HTMLElement | null = null

let isDragging = false
let offsetX = 0
let offsetY = 0

function onPointerDown(e: PointerEvent) {
  e.preventDefault()
  const rect = moveTarget!.getBoundingClientRect()
  isDragging = true
  offsetX = e.clientX - rect.left
  offsetY = e.clientY - rect.top
  moveTarget!.style.left = `${rect.left}px`
  moveTarget!.style.top = `${rect.top}px`
  moveTarget!.style.right = ''
  moveTarget!.style.bottom = ''
  document.addEventListener('pointermove', onPointerMove)
  document.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(e: PointerEvent) {
  if (!isDragging || !moveTarget) return
  moveTarget.style.left = `${e.clientX - offsetX}px`
  moveTarget.style.top = `${e.clientY - offsetY}px`
  if (dragHandle) {
    dragHandle.style.left = `${e.clientX - offsetX}px`
    dragHandle.style.top = `${e.clientY - offsetY}px`
  }
}

function onPointerUp() {
  isDragging = false
  document.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerup', onPointerUp)
}

onMounted(async () => {
    const { loadOml2d } = await import('oh-my-live2d')
    oml2dInstance = loadOml2d({
        parentElement: document.body,
        statusBar: { disable: true },
        models: [
            {
                path: "/blog/dist/models/anon/model.json",
                scale: 0.2,
                volume: 0,
                position: [60, 60],
                stageStyle: {
                    height: 430,
                    width: 400
                }
            }
        ]
    })

    // 等模型加载 + 布局完成后创建拖拽把手
    let retries = 0
    const trySetup = () => {
      const allCanvases = document.querySelectorAll('canvas')
      const canvas = allCanvases[allCanvases.length - 1]
      if (!canvas || (canvas as any).l2dInited) {
        if (retries++ < 20) setTimeout(trySetup, 300)
        return
      }
      ;(canvas as any).l2dInited = true

      // 找到库创建的顶层容器
      let top: HTMLElement = canvas
      while (top.parentElement && top.parentElement !== document.body) {
        top = top.parentElement
      }
      moveTarget = top
      top.style.pointerEvents = 'none'
      top.style.position = 'fixed'
      top.style.right = '0'
      top.style.bottom = '0'
      top.style.zIndex = '100'
      // 清除可能存在的 left/top 干扰
      top.style.left = ''
      top.style.top = ''

      // 读取画布位置定位把手
      const cr = canvas.getBoundingClientRect()
      const handle = document.createElement('div')
      handle.id = 'l2d-drag-handle'
      handle.style.cssText = `
        position: fixed;
        left: ${cr.left}px;
        top: ${cr.top}px;
        width: ${Math.max(cr.width, 400)}px;
        height: ${Math.max(cr.height, 430)}px;
        z-index: 101;
        cursor: grab;
      `
      document.body.appendChild(handle)
      dragHandle = handle
      handle.addEventListener('pointerdown', onPointerDown)
    }
    setTimeout(trySetup, 1000)
})

onUnmounted(() => {
    document.removeEventListener('pointermove', onPointerMove)
    document.removeEventListener('pointerup', onPointerUp)
    document.getElementById('l2d-drag-handle')?.remove()
    const canvases = document.querySelectorAll('canvas')
    canvases.forEach(c => {
      let top = c.parentElement
      while (top && top.parentElement && top.parentElement !== document.body) {
        top = top.parentElement
      }
      if (top && top !== document.body) top.remove()
    })
})
</script>


<style scoped>
</style>