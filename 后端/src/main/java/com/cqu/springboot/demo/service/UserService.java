package com.cqu.springboot.demo.service;

import com.cqu.springboot.demo.entity.Doc;
import com.cqu.springboot.demo.entity.User;
import com.cqu.springboot.demo.vo.UserEChartsVo;

import java.util.List;

/**
 * (User)表服务接口
 *
 * @author makejava
 * @since 2022-06-18 16:24:02
 */
public interface UserService {

    /**
     * 通过ID查询单条数据
     *
     * @param userId 主键
     * @return 实例对象
     */
    User queryById(Integer userId);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<User> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param user 实例对象
     * @return 实例对象
     */
    User insert(User user);

    /**
     * 修改数据
     *
     * @param user 实例对象
     * @return 实例对象
     */
    User update(User user);

    /**
     * 通过主键删除数据
     *
     * @param userId 主键
     * @return 是否成功
     */
    boolean deleteById(Integer userId);

    /**
     * 用户登录
     * @return
     */
    User loginUser(User user);

    /**
     * 获取用户总数量
     * @return
     */
    Long getUserCount();

    /**
     * 获取用户图表数据
     * @return
     */
    List<UserEChartsVo> getUserEChartsData();
}