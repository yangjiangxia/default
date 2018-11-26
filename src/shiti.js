exports.cp_data = function (data) {
    let cpi_de = {}
    cpi_de.id = data.id
    cpi_de.title = data.title //标题
    cpi_de.jiner = data.jiner //金额
    cpi_de.xiangqing = data.xiangqing //详情
    cpi_de.wangpan = data.wangpan //网盘地址
    cpi_de.leixing = data.leixing //类型
    cpi_de.leixing_text = data.leixing_text //类型中文
    cpi_de.fengmian = data.fengmian //封面
    cpi_de.add_time = data.add_time //添加时间
    return cpi_de
}
