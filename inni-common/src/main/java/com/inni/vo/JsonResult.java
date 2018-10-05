package com.inni.vo;

import java.io.Serializable;
/**主要用户封装控制层数据*/
public class JsonResult implements Serializable{
	private static final long serialVersionUID = 583312263212167841L;
	private static final int SUCCESS=1;
    private static final int ERROR=0;
    
    private int pno=0;
    private int pages=0;
	public int getPages() {
		return pages;
	}
	public void setPages(int pages) {
		this.pages = pages;
	}
	public int getPno() {
		return pno;
	}
	public void setPno(int pno) {
		this.pno = pno;
	}
	/**状态码*/
    private int status=SUCCESS;//1表示OK,0表示Error
	/**状态码对应的消息*/
    private String msg="OK";
	/**具体数据(当前系统此名字规定必须使用data)*/
    private Object data;
    
    public JsonResult(){
    	
    	
    }
	public JsonResult(String msg) {
	    this.msg=msg;
	    
	}
	public JsonResult(Object data){
		this.data=data;
	}
	public JsonResult(Throwable e){
		this.status=ERROR;
		this.msg=e.getMessage();
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	
	
}
