<<<<<<< HEAD
// scroll.js

document.addEventListener("DOMContentLoaded", function() {
    // 获取按钮元素
    const scrollButton = document.getElementById("scrollButton");

    // 添加点击事件监听器
    scrollButton.addEventListener("click", function() {
        // 滚动到页面底部
        window.scrollTo(0, document.body.scrollHeight);
    });

    // 监听页面滚动事件
    window.addEventListener("scroll", function() {
        // 如果页面已经滚动到底部，隐藏按钮
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scrollButton.style.display = "none";
        } else {
            scrollButton.style.display = "block";
        }
    });
});
=======
// scroll.js

document.addEventListener("DOMContentLoaded", function() {
    // 获取按钮元素
    const scrollButton = document.getElementById("scrollButton");

    // 添加点击事件监听器
    scrollButton.addEventListener("click", function() {
        // 滚动到页面底部
        window.scrollTo(0, document.body.scrollHeight);
    });

    // 监听页面滚动事件
    window.addEventListener("scroll", function() {
        // 如果页面已经滚动到底部，隐藏按钮
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scrollButton.style.display = "none";
        } else {
            scrollButton.style.display = "block";
        }
    });
});
>>>>>>> 403d178676ee4346194521038af34fa94281adae
