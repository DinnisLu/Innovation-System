document.addEventListener('DOMContentLoaded', () => {
    const nextStepBtn = document.getElementById('nextStep');
    const productNameInput = document.getElementById('productName');
    const industrySelect = document.getElementById('industrySelect');

    nextStepBtn.addEventListener('click', () => {
        const productName = productNameInput.value.trim();
        const industry = industrySelect.value;

        if (!productName || !industry) {
            alert('请填写完整信息');
            return;
        }

        // 保存数据到 sessionStorage
        sessionStorage.setItem('productData', JSON.stringify({
            name: productName,
            industry: industry
        }));

        // 跳转到市场分析页面
        window.location.href = 'market-analysis.html';
    });
});
// 在之前的代码后添加
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有tab按钮
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    // 为每个tab按钮添加点击事件
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有active类
            tabBtns.forEach(b => b.classList.remove('active'));
            // 为当前点击的按钮添加active类
            btn.classList.add('active');
            
            // 这里可以添加切换选项的逻辑
            updateOptions(btn.textContent);
        });
    });
});

function updateOptions(direction) {
    // 根据不同方向更新选项内容
    const optionsData = {
        '使用更加便携': [
            '使产品更易于使用',
            '让产品更有效率',
            '为产品添加新功能',
            '提高产品的速度',
            '提高产品的可靠性'
        ],
        // 可以添加其他方向的选项
    };

    const options = optionsData[direction] || [];
    // 更新选项显示
    // ... 实现选项更新逻辑
}
document.addEventListener('DOMContentLoaded', () => {
    // 生成10个解决方案
    const solutionsList = document.querySelector('.solutions-list');
    
    for(let i = 1; i <= 10; i++) {
        const solutionItem = createSolutionItem(i);
        solutionsList.appendChild(solutionItem);
    }

    // 添加按钮事件监听
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', handleActionClick);
    });
});

function createSolutionItem(index) {
    const div = document.createElement('div');
    div.className = 'solution-item';
    div.innerHTML = `
        <div class="solution-content">
            <div class="solution-number">创新建议 ${index}</div>
            <p class="solution-text">改善用户体验，降低用户学习成本，提高用户工作效率，提高用户满意度</p>
        </div>
        <div class="solution-actions">
            <button class="action-btn" data-action="detail">查看详情</button>
            <button class="action-btn" data-action="adjust">方案调整</button>
            <button class="action-btn" data-action="compare">方案对比</button>
            <button class="action-btn" data-action="initial">初步方案</button>
        </div>
    `;
    return div;
}

document.addEventListener('DOMContentLoaded', () => {
    // 添加专利组合数据
    const patentGroups = [
        {
            title: '便携式折叠结构专利组合',
            relevance: '90%',
            patents: [
                'CN12345678A',
                'CN20785432A',
                'CN45678912A'
            ],
            description: '该组合主要解决产品便携性问题，结合创新机构和新型结构设计方案。',
            category: '机械结构'
        },
        // 可以添加更多专利组合
    ];

    // 为评估和专利规避按钮添加事件监听
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.textContent;
            const group = e.target.closest('.patent-group');
            const groupTitle = group.querySelector('.group-title h2').textContent;
            
            if (action === '评估') {
                console.log(`评估${groupTitle}`);
                // 实现评估逻辑
            } else if (action === '专利规避') {
                console.log(`专利规避${groupTitle}`);
                // 实现专利规避逻辑
            }
        });
    });

    // 探索新技术方向按钮事件
    document.querySelector('.primary-btn').addEventListener('click', () => {
        console.log('探索新技术方向');
        // 实现探索新技术方向逻辑
    });
});

// 生成完整解决方案
let selectedPath = null;
const generateBtn = document.getElementById('generateBtn');

function selectPath(element) {
    // 移除之前的选中状态
    document.querySelectorAll('.path-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // 添加新的选中状态
    element.classList.add('selected');
    selectedPath = element.dataset.path;
    
    // 启用生成按钮
    generateBtn.disabled = false;
}

function generateSolution() {
    if (!selectedPath) return;
    
    // 根据选择的路线跳转到对应的解决方案页面
    window.location.href = `solution-details.html?path=${selectedPath}`;
}

// 可选：添加键盘导航支持
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && selectedPath) {
        generateSolution();
    }
});