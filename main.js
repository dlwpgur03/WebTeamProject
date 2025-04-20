document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.darkmode-toggle')
  const themeIcon = document.querySelector('#theme-icon')
  const body = document.body

  // localStorage에서 테마 로드
  const savedTheme = localStorage.getItem('theme') || 'light'
  body.setAttribute('data-theme', savedTheme)
  themeIcon.src = savedTheme === 'dark' ? 'img/sun.png' : 'img/moon.png'

  // 토글 버튼 클릭 이벤트
  toggleButton.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme')
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    // 테마 및 아이콘 업데이트
    body.setAttribute('data-theme', newTheme)
    themeIcon.src = newTheme === 'dark' ? 'img/sun.png' : 'img/moon.png'

    // localStorage에 테마 저장
    localStorage.setItem('theme', newTheme)
  })
})
