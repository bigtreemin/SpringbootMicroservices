package com.inni.service;

import java.util.List;

import com.inni.pojo.Item;
import com.inni.vo.JsonResult;

public interface ItemService {

	List<Item> findHotItems();

	JsonResult findItems(Integer pno);

	JsonResult findItem(Integer pid);

}
