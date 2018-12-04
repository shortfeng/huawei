-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-11-15 12:14:10
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `huawei`
--

-- --------------------------------------------------------

--
-- 表的结构 `item`
--

CREATE TABLE `item` (
  `cid` int(11) NOT NULL,
  `itemModel` varchar(8) DEFAULT NULL,
  `uname` varchar(64) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `pic` varchar(64) DEFAULT NULL,
  `price` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `item`
--

INSERT INTO `item` (`cid`, `itemModel`, `uname`, `title`, `pic`, `price`) VALUES
(3, 'hot', '荣耀9青春版', '限时优惠300 尊享版赠好礼', 'img/2pic/2.jpg', '999'),
(4, 'hot', '荣耀10', '尊享好礼', 'img/2pic/3.jpg', '1999'),
(5, 'hot', '华为mate10', '尊享好礼', 'img/2pic/4.jpg', '3999'),
(6, 'hot', '保时捷纪念版', '尊享好礼', 'img/2pic/5.jpg', '9999'),
(7, 'hot', '麦芒10', '尊享好礼', 'img/2pic/6.jpg', '2999'),
(8, 'hot', '华为p10', '直降100', 'img/2pic/7.jpg', '3499'),
(9, 'hot', '华为p20', '送蓝牙耳机', 'img/2pic/8.jpg', '5999'),
(10, 'hot', '荣耀9', '配件好礼', 'img/2pic/9.jpg', '1999'),
(11, 'phone', '荣耀V10', '最高优惠800 尊享大礼包', 'img/phone/2.jpg', '1899'),
(12, 'phone', '华为畅想8 Plus', '直降200+赠好礼', 'img/phone/3.jpg', '1699'),
(13, 'phone', '荣耀畅玩7c', '优惠100 高配送耳机', 'img/phone/4.jpg', '899'),
(14, 'phone', 'HUAWEI Mate 10', '配件大礼包', 'img/2pic/5.jpg', '3399'),
(15, 'phone', 'HUAWEI nova 2s', '领券立减200元', 'img/phone/6.jpg', '2599'),
(16, 'phone', '荣耀9', '限时优惠400元', 'img/phone/7.jpg', '1899'),
(17, 'phone', '华为畅享8', '配件好礼', 'img/phone/8.jpg', '1099'),
(18, 'phone', '荣耀畅玩7A', '优惠100 高配送耳机', 'img/2pic/9.jpg', '699'),
(19, 'phone', '华为畅享 8e 青春', '配件礼包', 'img/phone/10.jpg', '799'),
(20, 'phone', '荣耀畅玩6', '荣耀高性价比手机', 'img/phone/11.jpg', '599'),
(21, 'phone', '华为畅享8e', '优惠100 高配送耳机', 'img/phone/12.jpg', '999'),
(22, 'pc', '荣耀MagicBook', '购机享6期免息', 'img/pc/2.jpg', '4999'),
(23, 'pc', 'HUAWEI MataBookD', '限量赠华为双肩包', 'img/pc/3.jpg', '6488'),
(24, 'pc', '荣耀MagicBook锐龙版', '高性能金属轻薄本', 'img/pc/4.jpg', '3999'),
(25, 'pc', 'HUAWEI MateBook X', '尊享6期分期免息', 'img/pc/5.jpg', '5988'),
(26, 'pc', '荣耀MagicBook 星云紫', '高颜值时尚轻薄本', 'img/pc/6.jpg', '4999'),
(27, 'pc', 'HUAWEI MateBook E', '部分享6期免息', 'img/pc/7.jpg', '4788'),
(28, 'pc', 'HUAWEI MateBook X Pro', '部分版本享6期免息', 'img/pc/8.jpg', '8688'),
(29, 'mini', '荣耀Waterplay', '最高直降100 增支架', 'img/mini/2.jpg', '1599'),
(30, 'mini', '华为平板 M5 10.8英寸', '2K高清屏', 'img/mini/3.jpg', '2488'),
(31, 'mini', '荣耀畅玩平板2 9.6', '最高直降111元', 'img/mini/4.jpg', '1188'),
(32, 'mini', '华为平板 M5 Pro', '便捷移动办公', 'img/mini/5.jpg', '3488'),
(33, 'mini', '荣耀平板2', '优惠直降100元', 'img/mini/6.jpg', '1399'),
(34, 'mini', '华为平板 M3 青春版 10', '最高直降300', 'img/mini/7.jpg', '1899'),
(35, 'mini', '荣耀畅玩平板2 8英寸', '最高直降111元', 'img/mini/8.jpg', '988'),
(36, 'watch', '荣耀畅玩手环 A2', '直降50元仅售99', 'img/watch/2.jpg', '99'),
(37, 'watch', 'HUAWEI WATCH 2', '独立通话4G智能手表', 'img/watch/3.jpg', '1388'),
(38, 'watch', '荣耀手环', '最高直降111元', 'img/watch/4.jpg', '1188'),
(39, 'watch', '荣耀手环3', '限时最高降30元', 'img/watch/5.jpg', '138'),
(40, 'watch', 'HUAWEI WATCH 2 Pro', '手表手机共享', 'img/watch/6.jpg', '2538'),
(41, 'watch', '华为运动手表', '50米防水游泳', 'img/watch/7.png', '278'),
(42, 'watch', '华为手环B3 青春版', '是手环也是耳机', 'img/watch/8.jpg', '479'),
(43, 'wifi', '荣耀路由2', '限时直降20元', 'img/wifi/2.jpg', '179'),
(44, 'wifi', '华为随行Wifi 2 畅享版', '新品上市', 'img/wifi/3.jpg', '349'),
(45, 'wifi', '荣耀路由Pro', '限时直降14元', 'img/wifi/4.png', '314'),
(46, 'wifi', '华为子母路由 Q2', '哪里信号不好插哪里', 'img/wifi/5.jpg', '799'),
(47, 'wifi', '荣耀路由标准版', '限时直降20元', 'img/wifi/6.png', '139'),
(48, 'wifi', '华为随行Wifi 2', '4G全网通', 'img/wifi/7.jpg', '469'),
(49, 'other', '荣耀xSport 运动蓝牙耳机', '直降50元领券更优惠', 'img/other/2.jpg', '199'),
(50, 'other', '荣耀智能体脂秤', '直降70', 'img/other/3.jpg', '99'),
(51, 'other', '华为智能体脂秤', '限时直降14元', 'img/other/4.jpg', '124'),
(52, 'other', '华为主动降噪耳机3', '3种降噪模式', 'img/other/5.jpg', '399'),
(53, 'other', '移动电源10000mAh', '直降40', 'img/other/6.jpg', '129'),
(54, 'other', '荣耀引擎耳机', '直降50', 'img/other/7.jpg', '79');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`cid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `item`
--
ALTER TABLE `item`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
