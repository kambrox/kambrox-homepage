"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import "../product1-detail/product-detail.css";

const companyInfo = [
  ["대표자", "문명훈"],
  ["주소", "서울시 은평구 통일로71길 2-1, 4층 16호(대조동, 대조빌딩)"],
  ["대표번호", "02-6956-1133"],
  ["사업자 등록번호", "364-87-03182"]
] as const;

const detailNav: { label: string; href: string; current?: boolean }[] = [
  { label: "홈", href: "/" },
  { label: "아카데미", href: "/academy" },
  { label: "수소치료기", href: "/product1-detail" },
  { label: "건기식", href: "/product2", current: true }
] as const;

const products = [
  {
    slug: "myers",
    title: "캠브로씨 마이어스",
    price: 0,
    popularity: 9,
    image: "/images/nutrition-myers.png",
    imageAlt: "캠브로씨 마이어스 상품 이미지"
  },
  {
    slug: "liposomal-vitamin-c",
    title: "캠브로씨 리포소말 비타민C",
    price: 0,
    popularity: 8,
    image: "/images/nutrition-liposomal-vitamin-c.png",
    imageAlt: "캠브로씨 리포소말 비타민C 상품 이미지"
  },
  {
    slug: "algal-omega3",
    title: "캠브로씨 알갈오메가3",
    price: 0,
    popularity: 7,
    image: "/images/nutrition-algal-omega3.png",
    imageAlt: "캠브로씨 알갈오메가3 상품 이미지"
  },
  {
    slug: "immusin",
    title: "캠브로씨 이뮤신",
    price: 0,
    popularity: 6,
    image: "/images/nutrition-immusin.png",
    imageAlt: "캠브로씨 이뮤신 상품 이미지"
  },
  {
    slug: "brc",
    title: "캠브로씨 비알씨",
    price: 0,
    popularity: 5,
    image: "/images/nutrition-brc.png",
    imageAlt: "캠브로씨 비알씨 상품 이미지"
  },
  {
    slug: "taheebo",
    title: "캠브로씨 타히보",
    price: 0,
    popularity: 4,
    image: "/images/nutrition-taheebo.png",
    imageAlt: "캠브로씨 타히보 상품 이미지"
  },
  {
    slug: "qrf",
    title: "캠브로씨 큐알에프",
    price: 0,
    popularity: 3,
    image: "/images/nutrition-qrf.png",
    imageAlt: "캠브로씨 큐알에프 상품 이미지"
  },
  {
    slug: "vitamin-d",
    title: "캠브로씨 비타민D",
    price: 0,
    popularity: 2,
    image: "/images/nutrition-vitamin-d.png",
    imageAlt: "캠브로씨 비타민D 상품 이미지"
  },
  {
    slug: "selenium",
    title: "캠브로씨 셀레늄",
    price: 0,
    popularity: 1,
    image: "/images/nutrition-selenium.png",
    imageAlt: "캠브로씨 셀레늄 상품 이미지"
  }
] as const;

type SortMode = "popular" | "name";

export default function Product2ListPage() {
  const [sort, setSort] = useState<SortMode>("popular");

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sort === "name") return a.title.localeCompare(b.title, "ko");
      return b.popularity - a.popularity;
    });
  }, [sort]);

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.href = "/";
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="page">
      <header className="detail-header">
        <div className="detail-header-inner">
          <button className="icon-button back-button" type="button" aria-label="뒤로가기" onClick={handleBack}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 18l-6-6 6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>뒤로</span>
          </button>

          <Link className="detail-brand" href="/" aria-label="KAMBROX 홈으로 이동">
            <img className="detail-brand-logo" src="/images/mplc24vr-logo-transparent.png" alt="KAMBROX" />
          </Link>

          <nav className="global-nav" aria-label="주요 메뉴">
            {detailNav.map((item) => (
              <Link key={item.label} href={item.href} aria-current={item.current ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <details className="mobile-menu">
            <summary aria-label="메뉴 열기">
              <span className="sr-only">메뉴 열기</span>
              <span className="hamburger-lines" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </summary>
            <nav className="mobile-menu-panel" aria-label="모바일 주요 메뉴">
              {detailNav.map((item) => (
                <Link key={item.label} href={item.href} aria-current={item.current ? "page" : undefined}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>

          <nav className="detail-actions" aria-label="상품 목록 홈 바로가기">
            <Link className="icon-button" href="/" aria-label="홈">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 10.7 12 4l8 6.7V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </header>

      <main className="nutrition-list-main">
        <div className="nutrition-toolbar">
          <div className="nutrition-total">총 {products.length}개</div>
          <label className="nutrition-sort">
            <span className="sr-only">정렬</span>
            <select aria-label="정렬" value={sort} onChange={(event) => setSort(event.target.value as SortMode)}>
              <option value="popular">인기순</option>
              <option value="name">제품명순</option>
            </select>
          </label>
        </div>

        <div className="nutrition-grid" aria-live="polite">
          {sortedProducts.map((product) => (
            <Link
              className="nutrition-card"
              href={`/product2-detail?product=${product.slug}`}
              key={product.title}
              onClick={() => {
                sessionStorage.setItem("selectedNutritionProduct", product.slug);
              }}
            >
              <div className="nutrition-media">
                <img
                  className="nutrition-image"
                  src={product.image}
                  alt={product.imageAlt}
                  onError={(event) => {
                    event.currentTarget.parentElement?.classList.add("is-image-error");
                  }}
                />
                <span className="nutrition-placeholder">
                  {product.title}
                  <br />
                  이미지 준비중
                </span>
              </div>
              <div className="nutrition-info">
                <strong className="nutrition-title">{product.title}</strong>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <button className="scroll-top" type="button" aria-label="상단으로 이동" onClick={handleScrollTop}>
        상단으로 이동
      </button>

      <footer className="site-footer" aria-label="KAMBROX partnership footer">
        <div className="site-footer-inner">
          <div className="footer-message">
            <p className="footer-title">
              KAMBROX는 회복의 새로운 표준을
              <br />
              만들어갑니다.
            </p>
          </div>

          <div className="footer-contact" aria-label="회사 정보">
            <p className="footer-company-name">주식회사 캠브록스 ( KAMBROX Corp.)</p>
            <dl className="footer-company-info">
              {companyInfo.map(([term, description]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </footer>
    </div>
  );
}
