package com.cqu.springboot.demo.controller;

import com.cqu.springboot.demo.entity.Category;
import com.cqu.springboot.demo.service.CategoryService;
import com.cqu.springboot.demo.utils.result.DataResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.xml.crypto.Data;

/**
 * (Category)表控制层
 *
 * @author makejava
 * @since 2022-06-18 16:22:21
 */
@RestController
@RequestMapping("category")
public class CategoryController {
    /**
     * 服务对象
     */
    @Resource
    private CategoryService categoryService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Category selectOne(Long id) {
        return this.categoryService.queryById(id);
    }

    /**
     * 根据条件查询文档类型
     * @param category
     * @return
     */
    @PostMapping("getCategoryByCondition")
    public DataResult getCategoryByCondition(@RequestBody Category category){
        return DataResult.successByDataArray(this.categoryService.queryAll(category));
    }
    
    /**
     * @description: 查询文档图表需要的数据
     * @author: 肖鸿亮
     * @time: 2022/6/21 10:45
     * @param:
     * @return:
     */    
    @GetMapping("getCategoryEChartsData")
    public DataResult getCategoryEChartsData(){
        return DataResult.successByDataArray(this.categoryService.getCategoryEChartsData());
    }

}