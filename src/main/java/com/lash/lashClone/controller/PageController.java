package com.lash.lashClone.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// 캠페인, 저널, 브랜드 페이지 로딩


@Controller
public class PageController {

    @GetMapping("/index")
    public String loadMainPage() {
        return "page_main/index";
    }

    @GetMapping("/campaign")
    public String loadCampaignPage() {
        return "page_campaign/campaign";
    }

    @GetMapping("/journal")
    public String loadJournalPage() {
        return "journal_html/journal";
    }

    @GetMapping("/brand")
    public String loadBrandPage() {
        return "page_brand/brand-CB";
    }
}
