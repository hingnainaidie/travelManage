package com.cqu.springboot.demo.service.impl;

import com.cqu.springboot.demo.dao.CategoryDao;
import com.cqu.springboot.demo.entity.Authority;
import com.cqu.springboot.demo.entity.Category;
import com.cqu.springboot.demo.service.CategoryService;
import com.cqu.springboot.demo.vo.CategoryEChartsVo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Category)表服务实现类
 *
 * @author makejava
 * @since 2022-06-18 16:22:21
 */
@Service("categoryService")
@Transactional
public class CategoryServiceImpl implements CategoryService {
    @Resource
    private CategoryDao categoryDao;

    /**
     * 通过ID查询单条数据
     *
     * @param categoryId 主键
     * @return 实例对象
     */
    @Override
    public Category queryById(Long categoryId) {
        return this.categoryDao.queryById(categoryId);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Category> queryAllByLimit(int offset, int limit) {
        return this.categoryDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param category 实例对象
     * @return 实例对象
     */
    @Override
    public Category insert(Category category) {
        this.categoryDao.insert(category);
        return category;
    }

    /**
     * 修改数据
     *
     * @param category 实例对象
     * @return 实例对象
     */
    @Override
    public Category update(Category category) {
        this.categoryDao.update(category);
        return this.queryById(category.getCategoryId());
    }

    /**
     * 通过主键删除数据
     *
     * @param categoryId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Long categoryId) {
        return this.categoryDao.deleteById(categoryId) > 0;
    }


    /**
     * 获取所有的文档类型
     * @param category 实例对象
     * @return
     */
    @Override
    public List<Category> queryAll(Category category) {
        return this.categoryDao.queryAll(category);
    }

    /**
     * 获取文档图表需要的数据
     * @return
     */
    @Override
    public List<CategoryEChartsVo> getCategoryEChartsData() {
        return this.categoryDao.getCategoryEChartsData();
    }


}