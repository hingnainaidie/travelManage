package com.cqu.springboot.demo.entity;

import lombok.ToString;

import java.io.Serializable;

/**
 * (Category)实体类
 *
 * @author makejava
 * @since 2022-06-18 16:22:20
 */
@ToString
public class Category implements Serializable {
    private static final long serialVersionUID = -94412326122168230L;

    private Long categoryId;

    private String categoryName;


    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

}