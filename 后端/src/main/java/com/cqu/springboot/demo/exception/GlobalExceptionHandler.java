package com.cqu.springboot.demo.exception;

import com.cqu.springboot.demo.utils.result.DataResult;
import com.cqu.springboot.demo.utils.result.code.Code;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * ClassName: GlobalExceptionHandler
 * Description:
 * date: 2022/6/18 16:33
 *
 * @author 肖鸿亮
 * @since JDK 1.8
 */
@ControllerAdvice("com.cqu.springboot.demo")
public class GlobalExceptionHandler {

    /**
     * 配置全局异常处理, 事务回滚
     * @param e
     * @return
     */
    @Transactional(rollbackFor = Exception.class)
    @ExceptionHandler(Exception.class)
    public DataResult exceptionHandler(Exception e){
        e.printStackTrace();
        System.out.println("抓到异常");
        //手动事务回滚
        TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
        return DataResult.errByErrCode(Code.ERROR);
    }

}
