package com.cqu.springboot.demo.entity;

import lombok.ToString;

import java.io.Serializable;

/**
 * (Authority)实体类
 *
 * @author makejava
 * @since 2022-06-18 16:21:51
 */
@ToString
public class Authority implements Serializable {
    private static final long serialVersionUID = -99615311997190574L;

    private Long authorityId;

    private String authorityName;


    public Long getAuthorityId() {
        return authorityId;
    }

    public void setAuthorityId(Long authorityId) {
        this.authorityId = authorityId;
    }

    public String getAuthorityName() {
        return authorityName;
    }

    public void setAuthorityName(String authorityName) {
        this.authorityName = authorityName;
    }

}