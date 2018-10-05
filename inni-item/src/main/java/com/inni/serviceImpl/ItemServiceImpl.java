package com.inni.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inni.mapper.ItemMapper;
import com.inni.pojo.Item;
import com.inni.service.ItemService;
import com.inni.vo.JsonResult;

@Service
public class ItemServiceImpl implements ItemService{
	
	@Autowired
	private ItemMapper itemMapper;

	@Override
	public List<Item> findHotItems() {
		List<Item> items = itemMapper.findHotItems();
		
		return items;
	}

	@Override
	public JsonResult findItems(Integer pno) {
		int startIndex = (pno-1)*10;
		int count = itemMapper.findItemsCount();
		if(count==0) {
			return new JsonResult(new RuntimeException("没有查询到商品信息"));
		}
		List<Item> items = itemMapper.findItems(startIndex);
		JsonResult data = new JsonResult(items);
		data.setPages((count/10)+1);
		return data;
	}

	@Override
	public JsonResult findItem(Integer pid) {
		Item item = itemMapper.findItem(pid);
		if(item==null) {
			return new JsonResult(new RuntimeException("没有查询到商品信息"));
		}
		
		return new JsonResult(item);
	}

}
