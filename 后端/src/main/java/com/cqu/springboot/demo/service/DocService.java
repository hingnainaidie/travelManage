package com.cqu.springboot.demo.service;

import com.cqu.springboot.demo.entity.Doc;

import java.util.List;

/**
 * (Doc)表服务接口
 *
 * @author makejava
 * @since 2022-06-18 16:23:46
 */
public interface DocService {

    /**
     * 通过ID查询单条数据
     *
     * @param docId 主键
     * @return 实例对象
     */
    Doc queryById(Long docId);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Doc> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param doc 实例对象
     * @return 实例对象
     */
    Doc insert(Doc doc);

    /**
     * 修改数据
     *
     * @param doc 实例对象
     * @return 实例对象
     */
    Doc update(Doc doc);

    /**
     * 通过主键删除数据
     *
     * @param docId 主键
     * @return 是否成功
     */
    boolean deleteById(Long docId);

    /**
     * 通过实体作为筛选条件查询
     *
     * @param doc 实例对象
     * @return 对象列表
     */
    List<Doc> queryAll(Doc doc);

}