package com.zq.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {
	static List<Map<String, String>> commentList = new ArrayList<Map<String, String>>();

	{
		Map<String, String> map1 = new HashMap<String, String>();
		map1.put("id", "10086");
		map1.put("name", "阿猫");
		map1.put("comment", "沙发");
		map1.put("headImg", "http://tp2.sinaimg.cn/1751158793/50/5730718596/1");
		commentList.add(map1);

		Map<String, String> map2 = new HashMap<String, String>();
		map2.put("id", "10000");
		map2.put("name", "阿狗");
		map2.put("comment", "长得帅是怎样的体验");
		map2.put("headImg", "http://tp4.sinaimg.cn/3069348215/50/5721712236/1");
		commentList.add(map2);

		Map<String, String> map3 = new HashMap<String, String>();
		map3.put("id", "12306");
		map3.put("name", "阿呆");
		map3.put("comment", "装比如风");
		map3.put("headImg", "http://tp1.sinaimg.cn/2709577332/50/5734583466/0");
		commentList.add(map3);

		Map<String, String> map4 = new HashMap<String, String>();
		map4.put("id", "12315");
		map4.put("name", "阿瓜");
		map4.put("comment", "无师自通");
		map4.put("headImg", "http://tp4.sinaimg.cn/2142168143/50/5743234065/0");
		commentList.add(map4);
	}

	@RequestMapping("/listComments")
	public List<Map<String, String>> listComments() {
		return commentList;
	}
	
	@RequestMapping("/listScoreComments")
	public List<Map<String, String>> listScoreComments() {
		List<Map<String, String>> scoreCommentList = new ArrayList<Map<String, String>>();
		Map<String,Map<String,String>> scoreMap = new HashMap<String,Map<String,String>>();
		Map<String,String> score = null;
		for(Map<String, String> map : commentList){
			if(scoreMap.get(map.get("id")) == null){
				score = new HashMap<>();
				score.put("id", map.get("id"));
				score.put("name", map.get("name"));
				score.put("headImg", map.get("headImg"));
				score.put("count", "1");
			}else {
				score = scoreMap.get(map.get("id"));
				score.put("count",""+(Integer.valueOf(score.get("count"))+1));
			}
			
			scoreMap.put(map.get("id"), score);
		}
		for(Entry<String, Map<String, String>> entry : scoreMap.entrySet())
			scoreCommentList.add(entry.getValue());
		
		Collections.sort(scoreCommentList,new Comparator<Map<String, String>>(){
			@Override
			public int compare(Map<String, String> map1,Map<String, String> map2) {
				if(Integer.valueOf(map1.get("count")) > Integer.valueOf(map2.get("count")))
					return -1;
				else
					return 1;
			}
			
		});
		return scoreCommentList;
	}

	@RequestMapping("/addComment")
	public Map<String, Object> addComment(@RequestParam String id,@RequestParam String name,@RequestParam String comment,@RequestParam String headImg){
		Map<String, Object> res = new HashMap<String, Object>();
		try{
			
			Map<String, String> map5 = new HashMap<String, String>();
			map5.put("id", id);
			map5.put("name", name);
			map5.put("comment", comment);
			map5.put("headImg", headImg);
			commentList.add(map5);
			res.put("result", 1);
		}catch(Exception e){
			res.put("result", 0);
		}
		
		return res;

	}
	
	@RequestMapping("/addComment2")
	public Map<String, Object> addComment2(@RequestBody Map<String, Object> map) {
		Map<String, Object> res = new HashMap<String, Object>();

		try{
			String id = map.get("id").toString();
			String name = map.get("name").toString();
			String comment = map.get("comment").toString();
			String headImg = map.get("headImg").toString();
			
			Map<String, String> map5 = new HashMap<String, String>();
			map5.put("id", id);
			map5.put("name", name);
			map5.put("comment", comment);
			map5.put("headImg", headImg);
			commentList.add(map5);
			res.put("result", 1);
		}catch(Exception e){
			e.printStackTrace();
			res.put("result", 0);
		}
		
		return res;

	}
}
