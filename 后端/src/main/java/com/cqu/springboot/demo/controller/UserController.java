package com.cqu.springboot.demo.controller;

import com.cqu.springboot.demo.entity.User;
import com.cqu.springboot.demo.service.UserService;
import com.cqu.springboot.demo.utils.result.DataResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * (User)表控制层
 *
 * @author makejava
 * @since 2022-06-18 16:24:02
 */
@RestController
@RequestMapping("user")
public class UserController {
    /**
     * 服务对象
     */
    @Resource
    private UserService userService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public User selectOne(Integer id) {
        return this.userService.queryById(id);
    }

    /**
     * 获取用户总数量
     * @return
     */
    @GetMapping("getUserCount")
    public DataResult getUserCount(){
        return DataResult.successByTotalData(null, this.userService.getUserCount());
    }

    /**
     * 获取用户图表数据
     * @return
     */
    @GetMapping("getUserEChartsData")
    public DataResult getUserEChartsData(){
        return DataResult.successByDataArray(this.userService.getUserEChartsData());
    }

}