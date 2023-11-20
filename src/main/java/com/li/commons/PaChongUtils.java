package com.li.commons;

import java.io.IOException;
import java.net.URLStreamHandler;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.gargoylesoftware.htmlunit.NicelyResynchronizingAjaxController;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import org.apache.commons.logging.LogFactory;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class PaChongUtils {

    public String wordToResult(String word) throws IOException {//设置需要爬取的网站域名（URL）、网络超时时间、get方式获取网页HTML的内容（这里采用post方式也是一样的）
        Document document = Jsoup.connect("https://baike.baidu.com/search?word="+ word +"&pn=0&rn=0&enc=utf8").timeout(5000).post();
       // System.out.println(document);
        //以及遍历class属性为result-title那一行的内容
        Elements elementsByClass = document.getElementsByClass("result-title");
        //System.out.println(elementsByClass);
        HashMap<Double, String> doubleStringHashMap = new HashMap<Double, String>();
        ArrayList<Double> doubles = new ArrayList<Double>();
//        把这个词条所有的内容进行遍历，比重判断，选出最优
        WebClient wc=new WebClient();
        wc.setJavaScriptTimeout(5000);
        wc.getOptions().setUseInsecureSSL(true);//接受任何主机连接 无论是否有有效证书
        wc.getOptions().setJavaScriptEnabled(true);//设置支持javascript脚本
        wc.getOptions().setCssEnabled(false);//禁用css支持
        wc.getOptions().setThrowExceptionOnScriptError(false);//js运行错误时不抛出异常
        wc.getOptions().setTimeout(10000);//设置连接超时时间
        wc.getOptions().setDoNotTrackEnabled(false);
        wc.setAjaxController(new NicelyResynchronizingAjaxController());
        for (Element href : elementsByClass){
            // 点击和分享数据是js加载的数据，需要通过解析js执行后的网页源码
            HtmlPage page= null;//用来存放所有url
            String url =  (String) href.attr("href");
         // System.out.println("url1:" + url);
            //如果url中不包含baike.baidu.com那么就进行转化"https://baike.baidu.com" + url
            if (url.indexOf("baike.baidu.com") == -1) {
                url = "https://baike.baidu.com" + url;
            }
           //System.out.println("url2:"+ url);
            page = wc.getPage(url);
            //System.out.println(page);
            LogFactory.getFactory().setAttribute("org.apache.commons.logging.Log",    "org.apache.commons.logging.impl.NoOpLog");

//            屏蔽异常的错误
            Logger.getLogger("com.gargoylesoftware.htmlunit").setLevel(Level.OFF);
            Logger.getLogger("org.apache.commons.httpclient").setLevel(Level.OFF);

//            线程睡3秒，给js执行的过程
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
//        System.out.println(page.asXml());j-topShareCount
//            把当前js执行后的编程Element对象方便操作
            //System.out.println(page.asXml());
            Element element = Jsoup.parse(page.asXml());
            // 获取点击数
            String clickNum = element.getElementsByClass("vote-count").get(0).text();
            // 获取分享数
            String shareNum = element.getElementById("j-topShareCount").text();

//            计算比值  点击数* 40%  + 分享数*60%
            Double sort =  Integer.parseInt(clickNum) * .4  + Integer.parseInt(shareNum) * .6;

            // 获取当前页面的的百度百科的名称解释内容
            Element select = element.select("div.lemma-summary").get(0);
//            添加到map中，权重值是key,名称和内容是值  href.text()名称   select.text()内容
            doubleStringHashMap.put(sort, href.text() + "-------"+select.text());
//            添加权重到列表，为后续排序做准备
            doubles.add(sort);
            //System.out.println("名称："+ href.text() + "；连接地址：" + href.attr("href") + "；点击数："+clickNum + "；分享数：" + shareNum);
        }
        Collections.sort(doubles, new Comparator<Double>() {
            public int compare(Double o1, Double o2) {
                if (o1 > o2){
                    return -1;
                }else {  // 2700  240    3000      2600   490
                    return 1;
                }
            }

        });
        wc.close();
        //System.out.println(doubles.toString());
        String answer = doubleStringHashMap.get(doubles.get(0));
       System.out.println(answer);
        return answer;
    }


    public static void main(String[] args) throws IOException {
        String answer = new PaChongUtils().wordToResult("熊猫");
    }

}
