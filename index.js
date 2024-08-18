let links = document.querySelectorAll('.menu-item')
let linkImages = document.querySelectorAll('.hover-reveal__img')


links.forEach((link, idx) => {
    link.addEventListener('mousemove', (e) => {
        console.log(e.clientX)
        link.children[1].style.opacity = '1'
        link.children[0].style.zIndex = '3'
        // 마우스 x 위치가 300px 이전에는 메뉴명보다 사진이 왼쪽에 있다가 300px 을 지나면 사진이 메뉴명보다 오른쪽으로 점점 이동한다.
        // 마우스 y 위치가 커질수록(마우스를 아래로 내릴수록) 사진이 위로 올라간다.
        // 마우스 x 위치가 커질수록(마우스를 오른쪽으로 이동할수록) 사진이 더 많이 회전한다.
        link.children[1].style.transform = `translate(${e.clientX - 300}px, -${e.clientY / 3}px) rotate(${e.clientX / 50}deg)` 
        linkImages[idx].style.transform = `scale(1)`
        link.style.zIndex = '2'
    })

    link.addEventListener('mouseleave', () => {
        link.children[1].style.opacity = 0
        link.children[1].style.transform = `translate(${-e.clientX}px, -300px)` // 호버 비활성화시 사진이 왼쪽 위 방향으로 빠르게 움직이면서 사라지는 효과
        linkImages[idx].style.transform = `scale(0.8)`
        link.style.zIndex = '0' // mix-blend-mode 를 메뉴 하나에만 적용하기 위함
    })
})