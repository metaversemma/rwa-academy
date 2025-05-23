// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-90');
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('bg-opacity-90');
        header.classList.remove('shadow-lg');
    }
});

// 注册表单处理
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            
            if (!name || !email) {
                alert('请填写所有必填信息');
                return;
            }
            
            // 这里应该添加真实的注册/支付逻辑
            // 简单模拟API调用
            setTimeout(() => {
                alert('注册成功！欢迎加入RWA Academy！');
                form.reset();
            }, 1000);
        });
    }
});

// 倒计时功能
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 3); // 3天后截止
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`;
        
        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "优惠已结束";
        }
    }, 1000);
}

// 加载课程数据
function loadCourses() {
    // 实际应用中这里应该是API调用
    // 这里使用模拟数据
    const coursesData = [
        {
            title: "Web3基础入门",
            description: "掌握区块链基础、钱包使用和加密货币交易的完整指南",
            price: 99,
            level: "入门级",
            image: "course1.jpg"
        },
        {
            title: "DeFi投资精通",
            description: "深入解析流动性挖矿、借贷协议和收益策略，实现被动收入",
            price: 199,
            level: "进阶级",
            image: "course2.jpg"
        },
        {
            title: "NFT创作与交易",
            description: "从创作到铸造再到营销，掌握NFT市场的完整盈利模式",
            price: 299,
            level: "专家级",
            image: "course3.jpg"
        }
    ];
    
    // 这里可以添加动态生成课程卡片的代码
}

// 创建README文件，方便项目说明