package com.inni.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Select;

import com.inni.pojo.Item;

public interface ItemMapper {

	@Select("select * from inni_item limit 0,3")
	List<Item> findHotItems();

	@Select("select * from inni_item limit #{startIndex},10")
	List<Item> findItems(Integer startIndex);

	@Select("select count(*) from inni_item")
	int findItemsCount();

	@Select("select * from inni_item where pid=#{pid}")
	Item findItem(Integer pid);
	
	@Delete("")
    void deleteItem();
}
