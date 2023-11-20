package com.li.model;

public class AdminPublisher {
    private Long publisherid;

    private String publishername;

    private String publisheraddress;

    private String publisherphone;

    public Long getPublisherid() {
        return publisherid;
    }

    public void setPublisherid(Long publisherid) {
        this.publisherid = publisherid;
    }

    public String getPublishername() {
        return publishername;
    }

    public void setPublishername(String publishername) {
        this.publishername = publishername == null ? null : publishername.trim();
    }

    public String getPublisheraddress() {
        return publisheraddress;
    }

    public void setPublisheraddress(String publisheraddress) {
        this.publisheraddress = publisheraddress == null ? null : publisheraddress.trim();
    }

    public String getPublisherphone() {
        return publisherphone;
    }

    public void setPublisherphone(String publisherphone) {
        this.publisherphone = publisherphone == null ? null : publisherphone.trim();
    }
}