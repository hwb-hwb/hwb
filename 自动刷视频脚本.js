// 检查无障碍服务是否已经启用
if (auto.service == null) {
    toast("请先启用无障碍服务！");
    auto.waitFor(); // 等待用户手动启用无障碍服务
}

// 提示用户开始自动刷视频
toast("自动刷视频脚本开始运行");

// 设置一个循环次数，避免脚本无限运行
let count = 0;
let maxCount = 10000; // 可以根据需要调整循环次数

while (count < maxCount) {
    // 每次循环计数+1
    count++;

    // 模拟上滑动作，滑动切换到下一个视频
    swipe(device.width / 2, device.height * 3 / 4, device.width / 2, device.height / 4, 500);

    // 等待视频播放一段时间（例如10秒），根据视频长度调整
    sleep(10000);
}

// 提示用户脚本运行结束
toast("自动刷视频脚本运行结束");