要求(?)：
将掷骰子操作放在服务器上，
对于我们5个骰子来说，要求一次fetch，生成结果，刷新网页（？）

 function getStoredData() {
            // 从本地存储获取数据
            const storedDataString = localStorage.getItem('userData');
            return storedDataString ? JSON.parse(storedDataString) : null;
        }

        function saveDataToLocalStorage() {
            // 将数据保存到本地存储
            localStorage.setItem('userData', JSON.stringify(storedData));
        }

        function loadStoredData() {
            // 加载存储的数据
            if (storedData.length > 0) {
                updateScoreTable();
                showScoreTable();
            }
        }
        function clearTable() {
            // 清零表格
            const tableBody = document.getElementById('scoreTableBody');
            tableBody.innerHTML = '';
        }




    readme.md