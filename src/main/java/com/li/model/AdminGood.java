package com.li.model;

public class AdminGood {
    private Long goodsid;

    private String goodsname;

    private String breifintroduction;

    private String detailintroduction;

    private Float goodsprice;

    private String photo;

    private String category;

    public Long getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(Long goodsid) {
        this.goodsid = goodsid;
    }

    public String getGoodsname() {
        return goodsname;
    }

    public void setGoodsname(String goodsname) {
        this.goodsname = goodsname == null ? null : goodsname.trim();
    }

    public String getBreifintroduction() {
        return breifintroduction;
    }

    public void setBreifintroduction(String breifintroduction) {
        this.breifintroduction = breifintroduction == null ? null : breifintroduction.trim();
    }

    public String getDetailintroduction() {
        return detailintroduction;
    }

    public void setDetailintroduction(String detailintroduction) {
        this.detailintroduction = detailintroduction == null ? null : detailintroduction.trim();
    }

    public Float getGoodsprice() {
        return goodsprice;
    }

    public void setGoodsprice(Float goodsprice) {
        this.goodsprice = goodsprice;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo == null ? null : photo.trim();
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category == null ? null : category.trim();
    }
}