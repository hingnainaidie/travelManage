package com.cqu.springboot.demo.aspect;

import com.cqu.springboot.demo.utils.VerifyUtil;
import com.cqu.springboot.demo.utils.result.DataResult;
import com.cqu.springboot.demo.utils.result.code.Code;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;

/**
 * ClassName: AroundCut
 * Description:
 * date: 2022/6/18 16:37
 *
 * @author 肖鸿亮
 * @since JDK 1.8
 */
@Aspect
@Component
public class AroundCut {
    public static final String POINT_CUT = "execution(* com.cqu.springboot.demo.controller.AuthorityController.*(..)) || " +
            "execution(* com.cqu.springboot.demo.controller.CategoryController.*(..)) || " +
            "execution(* com.cqu.springboot.demo.controller.DocController.*(..)) || " +
            "execution(* com.cqu.springboot.demo.controller.UserController.*(..))";


    /**
     * 判断用户的登录是否有效
     * @param pjp
     * @return
     * @throws Throwable
     */
    @Around(AroundCut.POINT_CUT)
    public DataResult checkSession(ProceedingJoinPoint pjp) throws Throwable {
        //获取session
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest().getSession();
        //判断用户登录是否有效
        if(VerifyUtil.isNull(session.getAttribute("userInfo"))){
            //返回登录失效
            return DataResult.errByErrCode(Code.LOGIN_OUT);
        }
        return (DataResult) pjp.proceed();
    }
}
