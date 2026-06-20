"use client";

import Link from "next/link";
import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./product-detail.css";

const productCatalog = {
  myers: {
    title: "캠브로씨 마이어스",
    price: 0,
    image: "/images/nutrition-myers.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  },
  "liposomal-vitamin-c": {
    title: "캠브로씨 리포소말 비타민C",
    price: 0,
    image: "/images/nutrition-liposomal-vitamin-c.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  },
  "algal-omega3": {
    title: "캠브로씨 알갈오메가3",
    price: 0,
    image: "/images/nutrition-algal-omega3.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  },
  immusin: {
    title: "캠브로씨 이뮤신",
    price: 0,
    image: "/images/nutrition-immusin.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  },
  brc: {
    title: "캠브로씨 비알씨",
    price: 0,
    image: "/images/nutrition-brc.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  },
  taheebo: {
    title: "캠브로씨 타히보",
    price: 0,
    image: "/images/nutrition-taheebo.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  },
  qrf: {
    title: "캠브로씨 큐알에프",
    price: 0,
    image: "/images/nutrition-qrf.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  },
  "vitamin-d": {
    title: "캠브로씨 비타민D",
    price: 0,
    image: "/images/nutrition-vitamin-d.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  },
  selenium: {
    title: "캠브로씨 셀레늄",
    price: 0,
    image: "/images/nutrition-selenium.png",
    detailImages: ["/images/nutrition-detail-common.png"]
  }
} as const;

type ProductSlug = keyof typeof productCatalog;
type ProductSummary = (typeof productCatalog)[ProductSlug];

const fallbackProduct = productCatalog.myers;

type PanelId = "detail" | "review" | "qna";

const tabs: { id: PanelId; label: string }[] = [
  { id: "detail", label: "상세정보" },
  { id: "review", label: "리뷰 0" },
  { id: "qna", label: "Q&A 0" }
];

const companyInfo: [string, string][] = [
  ["대표자", "문명훈"],
  ["주소", "서울시 은평구 통일로71길 2-1, 4층 16호(대조동, 대조빌딩)"],
  ["대표번호", "02-6956-1133"],
  ["사업자 등록번호", "364-87-03182"]
];

const detailNav = [
  { label: "홈", href: "/" },
  { label: "아카데미", href: "/academy" },
  { label: "수소치료기", href: "/product1-detail" },
  { label: "건기식", href: "/product2", current: true }
];

const BUY_NOTICE = "대표번호 02-6956-1133\n로 연락주시면 결제 및 배송상담을 함께\n도움드리겠습니다.";
const CART_NOTICE = "아직 장바구니를 지원하지 않습니다. 구매하기 버튼을 이용해 주세요.";

function formatWon(value: number) {
  return `${value.toLocaleString("ko-KR")} 원`;
}

function ProductDetailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [qty, setQty] = useState(1);
  const [shippingOption, setShippingOption] = useState("택배배송");
  const [isGalleryImageError, setIsGalleryImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<PanelId>("detail");
  const [noticeMessage, setNoticeMessage] = useState<string | null>(null);

  const selectedProduct = useMemo<ProductSummary>(() => {
    const querySlug = searchParams.get("product") as ProductSlug | null;
    if (querySlug && productCatalog[querySlug]) return productCatalog[querySlug];

    if (typeof window !== "undefined") {
      const storedSlug = sessionStorage.getItem("selectedNutritionProduct") as ProductSlug | null;
      if (storedSlug && productCatalog[storedSlug]) return productCatalog[storedSlug];
    }

    return fallbackProduct;
  }, [searchParams]);

  const showNotice = useCallback((message: string) => {
    setNoticeMessage(message);
  }, []);

  const hideNotice = useCallback(() => {
    setNoticeMessage(null);
  }, []);

  useEffect(() => {
    document.title = `${selectedProduct.title} · KAMBROX 건기식`;
    const querySlug = searchParams.get("product") as ProductSlug | null;
    const storedSlug = querySlug && productCatalog[querySlug] ? querySlug : null;
    if (storedSlug) sessionStorage.setItem("selectedNutritionProduct", storedSlug);
  }, [searchParams, selectedProduct]);

  useEffect(() => {
    setIsGalleryImageError(false);
  }, [selectedProduct.image]);

  useEffect(() => {
    if (!noticeMessage) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") hideNotice();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [noticeMessage, hideNotice]);

  const handleBack = useCallback(() => {
    if (typeof window !== "undefined") {
      const sameOriginReferrer =
        document.referrer && document.referrer.includes(window.location.host);
      if (sameOriginReferrer && window.history.length > 1) {
        router.back();
        return;
      }
    }
    router.push("/product2");
  }, [router]);

  const handleBuy = useCallback(() => showNotice(BUY_NOTICE), [showNotice]);
  const handleCart = useCallback(() => showNotice(CART_NOTICE), [showNotice]);

  const total = selectedProduct.price * qty;

  return (
    <div className="page">
      <main>
        <header className="detail-header">
          <div className="detail-header-inner">
            <button
              className="icon-button back-button"
              type="button"
              aria-label="뒤로가기"
              onClick={handleBack}
            >
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
              <img
                className="detail-brand-logo"
                src="/images/mplc24vr-logo-transparent.png"
                alt="KAMBROX"
              />
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

            <nav className="detail-actions" aria-label="상품상세 홈 바로가기">
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

        <section className="product-hero">
          <div className="visual-pane" aria-label="상품 이미지">
            <div className={`main-photo${isGalleryImageError ? " is-image-error" : ""}`} aria-label="선택된 상품 이미지">
              <img
                key={selectedProduct.image}
                src={selectedProduct.image}
                alt={`${selectedProduct.title} 상품 이미지`}
                onError={() => setIsGalleryImageError(true)}
                onLoad={() => setIsGalleryImageError(false)}
              />
              <span className="main-photo-placeholder">
                {selectedProduct.title}
                <br />
                이미지 준비중
              </span>
            </div>
          </div>

          <div className="split-line" aria-hidden="true" />

          <aside className="buy-pane" aria-label="상품 구매 정보">
            <div className="buy-inner">
              <h1 className="title">{selectedProduct.title}</h1>

              <div className="price num">
                {selectedProduct.price.toLocaleString("ko-KR")}
                <small>원</small>
              </div>

              <div className="shipping-summary">
                <svg className="truck" viewBox="0 0 24 18" aria-hidden="true">
                  <path
                    d="M1.5 3.2h12.2v9.1H1.5zM13.7 6.6h4.2l3.1 3.2v2.5h-7.3zM5.6 15.3a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2ZM17.5 15.3a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="num">무료</span>
              </div>

              <div className="rule" />

              <div className="info-row">
                <div className="label">배송</div>
                <div className="delivery-detail">
                  <p>주문 후 세부일정은 유선으로 고객과 상담 후 다음절차 진행됩니다.</p>
                  <p>유선 연락은 평일, 업무시간 기준 익일 내로 진행됩니다.</p>
                  <div className="policy-note" aria-label="배송 및 취소 환불 안내">
                    <p>
                      <strong>배송기간</strong> 결제 확인 후 평균 2~5영업일 이내 출고되며, 도서산간 지역은 1~2일 더 소요될 수 있습니다.
                    </p>
                    <p>
                      <strong>취소/환불</strong> 출고 전 주문은 상담을 통해 취소 가능하며, 수령 후 7일 이내 미사용 상품은 교환·환불 접수가 가능합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rule" />

              <div className="option-head">
                배송 옵션 선택 (필수) <span className="required">*</span>
              </div>
              <div className="select-wrap">
                <select
                  className="select"
                  aria-label="배송 옵션 선택"
                  value={shippingOption}
                  onChange={(event) => setShippingOption(event.target.value)}
                >
                  <option value="택배배송">택배배송</option>
                </select>
              </div>

              <div className="selected show">
                <div className="selected-top">
                  <span>{shippingOption || "배송 옵션을 먼저 선택해 주세요"}</span>
                  <span className="num">{formatWon(total)}</span>
                </div>
                <div className="qty-row">
                  <div className="qty" aria-label="수량 변경">
                    <button
                      type="button"
                      aria-label="수량 감소"
                      onClick={() => setQty((current) => Math.max(1, current - 1))}
                    >
                      −
                    </button>
                    <output className="num">{qty}</output>
                    <button
                      type="button"
                      aria-label="수량 증가"
                      onClick={() => setQty((current) => current + 1)}
                    >
                      ＋
                    </button>
                  </div>
                  <button
                    className="delete-option"
                    type="button"
                    onClick={() => {
                      setShippingOption("택배배송");
                      setQty(1);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>

              <div className="total">
                <span>선택 제품의 총액</span>
                <strong className="num">{formatWon(total)}</strong>
              </div>

              <div className="primary-actions">
                <button className="btn btn-gift" type="button" onClick={handleCart}>
                  장바구니
                </button>
                <button className="btn btn-buy" type="button" onClick={handleBuy}>
                  구매하기
                </button>
              </div>
            </div>
          </aside>
        </section>

        <section className="detail-tabs">
          <div className="tab-list" role="tablist" aria-label="상품 상세 탭">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab${activeTab === tab.id ? " active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <article
            className={`tab-panel${activeTab === "detail" ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="detail-image-stack" aria-label="상품 상세 설명 이미지">
              {selectedProduct.detailImages.length ? (
                selectedProduct.detailImages.map((src, index) => (
                  <img key={src} src={src} alt={`${selectedProduct.title} 상세정보 ${index + 1}`} />
                ))
              ) : (
                <div className="empty-state">상세 이미지 준비중</div>
              )}
            </div>
          </article>
          <article
            className={`tab-panel${activeTab === "review" ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="empty-state">작성된 리뷰가 없습니다.</div>
          </article>
          <article
            className={`tab-panel${activeTab === "qna" ? " active" : ""}`}
            role="tabpanel"
          >
            <div className="empty-state">작성된 Q&amp;A가 없습니다.</div>
          </article>
        </section>

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
      </main>

      <div className="mobile-sticky">
        <button className="btn btn-gift" type="button" onClick={handleCart}>
          장바구니
        </button>
        <button className="btn btn-buy" type="button" onClick={handleBuy}>
          구매하기
        </button>
      </div>

      <div
        className={`modal-backdrop${noticeMessage ? " show" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!noticeMessage}
        onClick={(event) => {
          if (event.target === event.currentTarget) hideNotice();
        }}
      >
        <div className="notice-modal">
          <p>{noticeMessage ?? ""}</p>
          <button className="modal-confirm" type="button" onClick={hideNotice}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  return (
    <Suspense fallback={null}>
      <ProductDetailContent />
    </Suspense>
  );
}
