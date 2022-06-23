package com.cqu.springboot.demo.controller;

import com.cqu.springboot.demo.entity.Authority;
import com.cqu.springboot.demo.entity.User;
import com.cqu.springboot.demo.service.AuthorityService;
import com.cqu.springboot.demo.service.UserService;
import com.cqu.springboot.demo.utils.MenuUtil;
import com.cqu.springboot.demo.utils.result.DataResult;
import com.cqu.springboot.demo.utils.result.code.Code;
import com.cqu.springboot.demo.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

/**
 * ClassName: LoginController
 * Description:
 * date: 2022/6/18 16:45
 *
 * @author 肖鸿亮
 * @since JDK 1.8
 */
@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthorityService authorityService;

    /**
     * 用户登录
     * @param user
     * @param session
     * @return
     */
    @PostMapping("login")
    public DataResult login(@RequestBody User user, HttpSession session){
        System.out.println("sessionId = " + session.getId());
        //1.查询用户是否存在
        User loginUser = userService.loginUser(user);
        if(null == loginUser){//用户不存在
            return DataResult.errByErrCode(Code.LOGIN_NOT_EXIST);
        }
        //2.封装返回的数据,返回账号, 用户类型
        UserVo userVo = new UserVo();
        userVo.setUserAccount(loginUser.getUserAccount());
        //获取用户类型
        Authority authority = this.authorityService.queryById(loginUser.getAuthorityId());
        userVo.setAuthorityName(authority.getAuthorityName());
        //获取用户可见的菜单
        userVo.setUserMenus(MenuUtil.getMenuVoByAuthorityId(loginUser.getAuthorityId()));
        //3.将用户数据放入session
        session.setAttribute("userInfo", userVo);
        //4.设置session过期时间
        session.setMaxInactiveInterval(20 * 60);
        return DataResult.successByData(userVo);
    }

    /**
     * 退出登录
     * @return
     */
    @GetMapping("loginOut")
    public DataResult loginOut(HttpSession session){
        session.removeAttribute("userInfo");
        return DataResult.errByErrCode(Code.LOGIN_OUT);
    }
}
