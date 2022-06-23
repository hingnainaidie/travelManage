package com.cqu.springboot.demo.service.impl;

import com.cqu.springboot.demo.dao.UserDao;
import com.cqu.springboot.demo.entity.Doc;
import com.cqu.springboot.demo.entity.User;
import com.cqu.springboot.demo.service.UserService;
import com.cqu.springboot.demo.vo.UserEChartsVo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * (User)表服务实现类
 *
 * @author makejava
 * @since 2022-06-18 16:24:02
 */
@Service("userService")
@Transactional
public class UserServiceImpl implements UserService {
    @Resource
    private UserDao userDao;

    /**
     * 通过ID查询单条数据
     *
     * @param userId 主键
     * @return 实例对象
     */
    @Override
    public User queryById(Integer userId) {
        return this.userDao.queryById(userId);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<User> queryAllByLimit(int offset, int limit) {
        return this.userDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param user 实例对象
     * @return 实例对象
     */
    @Override
    public User insert(User user) {
        this.userDao.insert(user);
        return user;
    }

    /**
     * 修改数据
     *
     * @param user 实例对象
     * @return 实例对象
     */
    @Override
    public User update(User user) {
        this.userDao.update(user);
        return this.queryById(user.getUserId());
    }

    /**
     * 通过主键删除数据
     *
     * @param userId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer userId) {
        return this.userDao.deleteById(userId) > 0;
    }


    /**
     * 用户登录
     * @param user
     * @return
     */
    @Override
    public User loginUser(User user) {
        return this.userDao.loginUser(user);
    }


    /**
     * 查询用户总数量
     * @return
     */
    @Override
    public Long getUserCount() {
        return this.userDao.getUserCount();
    }

    /**
     * 获取用户图表数据
     * @return
     */
    @Override
    public List<UserEChartsVo> getUserEChartsData() {
        return this.userDao.getUserEChartsData();
    }

}