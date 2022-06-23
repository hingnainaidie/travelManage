package com.cqu.springboot.demo.service;

import com.cqu.springboot.demo.entity.Authority;
import com.cqu.springboot.demo.entity.Category;
import com.cqu.springboot.demo.vo.CategoryEChartsVo;

import java.util.List;

/**
 * (Category)表服务接口
 *
 * @author makejava
 * @since 2022-06-18 16:22:21
 */
public interface CategoryService {

    /**
     * 通过ID查询单条数据
     *
     * @param categoryId 主键
     * @return 实例对象
     */
    Category queryById(Long categoryId);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Category> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param category 实例对象
     * @return 实例对象
     */
    Category insert(Category category);

    /**
     * 修改数据
     *
     * @param category 实例对象
     * @return 实例对象
     */
    Category update(Category category);

    /**
     * 通过主键删除数据
     *
     * @param categoryId 主键
     * @return 是否成功
     */
    boolean deleteById(Long categoryId);

    /**
     * 通过实体作为筛选条件查询
     *
     * @param category 实例对象
     * @return 对象列表
     */
    List<Category> queryAll(Category category);

    /**
     * 获取文档图表数据
     * @return
     */
    List<CategoryEChartsVo> getCategoryEChartsData();

}