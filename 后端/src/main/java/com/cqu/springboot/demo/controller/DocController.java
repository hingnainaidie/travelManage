package com.cqu.springboot.demo.controller;

import com.cqu.springboot.demo.entity.Doc;
import com.cqu.springboot.demo.service.DocService;
import com.cqu.springboot.demo.utils.result.DataResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

/**
 * (Doc)表控制层
 *
 * @author makejava
 * @since 2022-06-18 16:23:46
 */
@RestController
@RequestMapping("doc")
@CrossOrigin
public class DocController {
    /**
     * 服务对象
     */
    @Resource
    private DocService docService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @PostMapping("selectOne")
    public DataResult selectOne(Long id, HttpSession httpSession) {
        Doc doc = this.docService.queryById(id);
        return DataResult.successByData(doc);
    }

    @PostMapping("getDocByCondition")
    public  DataResult getDocByCondition(@RequestBody Doc doc){
        return DataResult.successByDataArray(this.docService.queryAll(doc));
    }

}