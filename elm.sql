-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1:8889
-- Generation Time: Mar 12, 2018 at 12:36 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elm`
--

-- --------------------------------------------------------

--
-- Table structure for table `foods`
--

CREATE TABLE IF NOT EXISTS `foods` (
  `food_id` int(11) NOT NULL COMMENT '菜品id',
  `food_type` text NOT NULL COMMENT '菜品所属类别',
  `food_img` text NOT NULL COMMENT '菜品图片',
  `food_name` text NOT NULL COMMENT '菜品名称',
  `food_price` float NOT NULL COMMENT '菜品价格',
  `food_info` text NOT NULL COMMENT '菜品描述',
  `food_sellCount` int(11) NOT NULL COMMENT '菜品销量',
  `food_rating` text NOT NULL COMMENT '菜品好评率  直接写死  字符串  “100%”',
  `shop_id` int(11) NOT NULL COMMENT '商家id'
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `foods`
--

INSERT INTO `foods` (`food_id`, `food_type`, `food_img`, `food_name`, `food_price`, `food_info`, `food_sellCount`, `food_rating`, `shop_id`) VALUES
(1, '热销', 'https://fuss10.elemecdn.com/3/e9/7e6d6b0991063a83bbb790063d71ejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '水煎包', 13, '本店特色', 499, '95%', 1),
(2, '热销', 'https://fuss10.elemecdn.com/5/59/b2c180cc40593adb3e3906c2117fejpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '蒸饺', 11, '特色蒸饺8个', 17, '100%', 1),
(3, '热销', 'https://fuss10.elemecdn.com/3/ad/c160c5e3e4f091ce75ac41181deaajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '馄饨', 8, '推荐馄饨', 20, '100%', 1),
(4, '热咖啡', 'https://fuss10.elemecdn.com/9/da/f0b480ebe6837338769a702c42ecbjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '热太妃榛果拿铁', 16, '滑顺甜美的太妃榛果风味演绎出了如圆舞曲般优雅的口感，谁规定太妃榛果拿铁只有冬天才能喝？我偏不。', 66, '100%', 2),
(5, '热咖啡', 'https://fuss10.elemecdn.com/0/fa/b1d15cb3cf52fe2768c1c45592f5fjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '热玫瑰拿铁', 19, '浓郁香醇的浓缩咖啡与牛奶的巧妙融合，简单就是经典。虽然我叫拿铁，但我不是牛奶，我是牛奶咖啡。', 16, '99%', 2),
(6, '优惠', 'https://fuss10.elemecdn.com/f/fa/653d1c02c641d7d8f98d5b78183f5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '格雷珍珠奶茶', 12, '格雷茶，又名格雷伯爵茶，起源于英国首相格雷伯爵二世', 5, '100%', 3),
(7, '小料杯', 'https://fuss10.elemecdn.com/d/c4/e0895dc950aab3671969482226dcdjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '椰果', 12, '一份大椰果', 9, '98%', 3),
(8, '精美主食', 'https://fuss10.elemecdn.com/8/04/de3568a0b6f52cdc152184719cafajpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '肉夹馍', 6, '', 232, '99%', 1),
(9, '精美主食', 'https://fuss10.elemecdn.com/f/5e/3298414c957bf9524573a65271adfjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '素菜鸡蛋小笼包', 8, '亲，一笼8个哟', 22, '100%', 1),
(10, '冷萃系列', 'https://fuss10.elemecdn.com/e/82/757d2c29304a9f73a643665aabac7jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '冰美式', 22, '浓缩在温度急速下降时才会产生的独特风味，口感更加圆润饱满，喝起来提神醒脑，看起来高贵闷骚。', 56, '99%', 2),
(11, '冷萃系列', 'https://fuss10.elemecdn.com/6/ad/0471708af9255330a380cb2ac6cf1jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '冰拿铁', 28, '', 666, '100%', 2),
(12, '防弹家族', 'https://fuss10.elemecdn.com/1/12/f4dfd4280c1e83c74280959946b74jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '牛油果元气弹', 35, '', 6, '100%', 2),
(13, '防弹家族', 'https://fuss10.elemecdn.com/1/b4/fe15a79085019768db28ee04b63e5jpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '天生的粉椰子水', 25, '天生的粉红色椰子水，泰国进口，不含咖啡。', 3, '99%', 2),
(14, '防弹家族', 'https://fuss10.elemecdn.com/7/50/66f9e54d649ce754345377648151djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/', '纤盈粉粉椰\r\n      ', 26, '', 3, '98%', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL COMMENT '订单id',
  `order_img` text NOT NULL COMMENT '订单图片',
  `order_title` text NOT NULL COMMENT '订单标题',
  `order_time` text NOT NULL COMMENT '订单时间',
  `order_num` int(11) NOT NULL COMMENT '订单商品数量',
  `order_price` float NOT NULL COMMENT '订单价格',
  `order_state` text NOT NULL COMMENT '订单状态',
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `shop_id` int(11) NOT NULL COMMENT '商家id',
  `order_foodname` text NOT NULL COMMENT '订单已点菜品名称'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `order_img`, `order_title`, `order_time`, `order_num`, `order_price`, `order_state`, `user_id`, `shop_id`, `order_foodname`) VALUES
(2, 'https://fuss10.elemecdn.com/c/38/3058815885d8a6ce6b275081fcf82jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', '杭州小笼包', '2018-1-20', 2, 26, '订单已完成', 1, 1, '水煎包'),
(3, 'https://fuss10.elemecdn.com/5/35/7f05334a85e45d8b8bf0328fa224apng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', '连咖啡Coffee Box(北京崇文门店)', '2018-1-20', 2, 32, '订单已完成', 1, 2, '热太妃榛果拿铁'),
(6, 'https://fuss10.elemecdn.com/c/38/3058815885d8a6ce6b275081fcf82jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', '杭州小笼包', '2018-1-20', 2, 26, '订单已完成', 1, 1, '水煎包');

-- --------------------------------------------------------

--
-- Table structure for table `shops`
--

CREATE TABLE IF NOT EXISTS `shops` (
  `shop_id` int(11) NOT NULL COMMENT '商家id',
  `shop_name` text NOT NULL COMMENT '商家名称',
  `shop_img` text NOT NULL COMMENT '商家图片',
  `shop_score` float NOT NULL COMMENT '商家评分',
  `shop_monthly_sales` int(11) NOT NULL COMMENT '商家月销量',
  `shop_start_price` int(11) NOT NULL COMMENT '起送价',
  `shop_distribution_price` int(11) NOT NULL COMMENT '配送费',
  `shop_distance` float NOT NULL COMMENT '距离',
  `shop_time` text NOT NULL COMMENT '时间',
  `shop_distance_way` text NOT NULL COMMENT '配送快递如：蜂鸟配送',
  `shop_activities` text NOT NULL COMMENT '商家活动'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shops`
--

INSERT INTO `shops` (`shop_id`, `shop_name`, `shop_img`, `shop_score`, `shop_monthly_sales`, `shop_start_price`, `shop_distribution_price`, `shop_distance`, `shop_time`, `shop_distance_way`, `shop_activities`) VALUES
(1, '杭州小笼包', 'https://fuss10.elemecdn.com/c/38/3058815885d8a6ce6b275081fcf82jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', 4.3, 1706, 20, 6, 3.1, '32', '蜂鸟专送', '[\r\n{ type:"首",con:"新用户立减20元"},\r\n{ type:"减",con:"满25减10"},\r\n{ type:"折",con:"【7折】超值特价商品"}\r\n]'),
(2, '连咖啡Coffee Box(北京崇文门店)', 'https://fuss10.elemecdn.com/5/35/7f05334a85e45d8b8bf0328fa224apng.png?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', 4.5, 666, 15, 4, 2.3, '40', '', '[\r\n{ type:"首",con:"新用户下单立减17元"},\r\n{ type:"减",con:"满30减10"},\r\n{ type:"折",con:"【7折】超值特价商品"}\r\n]'),
(3, '贡茶（双井店）', 'https://fuss10.elemecdn.com/f/ae/d8256aeaf9831078bc54072f33d18jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', 4.9, 126, 20, 5, 1.2, '30', '蜂鸟配送', '\r\n[\r\n{ type:"首",con:"新用户下单立减10元"},\r\n{ type:"减",con:"满20减10"},\r\n{ type:"折",con:"【7折】超值特价商品"}\r\n]');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `username` text NOT NULL COMMENT '用户名',
  `password` text NOT NULL COMMENT '密码',
  `photo` text NOT NULL COMMENT '用户头像',
  `telephone` bigint(20) NOT NULL COMMENT '电话号码',
  `address` text NOT NULL COMMENT '地址'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `photo`, `telephone`, `address`) VALUES
(1, '123', '123', 'https://fuss10.elemecdn.com/4/a9/240888fd0a5913d2f5f601230feb0jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/', 18811113333, '北京市 上地街道 上地三街28号 信息大厦A601'),
(3, '666', '666', '', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`food_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `shops`
--
ALTER TABLE `shops`
  ADD PRIMARY KEY (`shop_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `foods`
--
ALTER TABLE `foods`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '菜品id',AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单id',AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `shops`
--
ALTER TABLE `shops`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商家id',AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
