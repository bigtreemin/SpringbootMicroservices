package com.inni.pojo;

import java.math.BigDecimal;

public class Item extends BasePojo{
	private Integer pid;
	private String ptitle;
	private String pic;
	private BigDecimal price;
	private String pranking;
	private String bpic;
	private String details;
	private String Code;
    private String integral;
    private String details_pic;
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public String getPtitle() {
		return ptitle;
	}
	public void setPtitle(String ptitle) {
		this.ptitle = ptitle;
	}
	public String getPic() {
		return pic;
	}
	public void setPic(String pic) {
		this.pic = pic;
	}
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getPranking() {
		return pranking;
	}
	public void setPranking(String pranking) {
		this.pranking = pranking;
	}
	public String getBpic() {
		return bpic;
	}
	public void setBpic(String bpic) {
		this.bpic = bpic;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public String getCode() {
		return Code;
	}
	public void setCode(String code) {
		Code = code;
	}
	public String getIntegral() {
		return integral;
	}
	public void setIntegral(String integral) {
		this.integral = integral;
	}
	public String getDetails_pic() {
		return details_pic;
	}
	public void setDetails_pic(String details_pic) {
		this.details_pic = details_pic;
	}
    
}
