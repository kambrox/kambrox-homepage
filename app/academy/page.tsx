"use client";

import Link from "next/link";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import "./product-detail.css";

const academyContentHtml = "<section class=\"hero\">\n      <div class=\"container hero-shell\">\n        <div class=\"hero-copy\">\n          <div>\n            <span class=\"eyebrow\">아카데미 소개 및 모집</span>\n            <h1>암 전문상담약사로의 도약, 캠브록스 아카데미</h1>\n            <p class=\"hero-lead\">\n              캠브록스와 문창식 원장님의 통합 암 치료 관점과 임상 경험을 바탕으로,\n              약사가 암 환자와 보호자를 더 깊이 이해하고 상담할 수 있도록 설계된 전문 교육 프로그램입니다.\n            </p>\n            <div class=\"hero-actions\">\n              <a class=\"button primary\" href=\"https://docs.google.com/forms/d/e/1FAIpQLSePvODV3pCTIfC7ow3J2idTTdCRT-jtTkFfZzBHZmM3QVSa7A/viewform?usp=publish-editor\" target=\"_blank\" rel=\"noopener noreferrer\">설명회 신청하기</a>\n              <a class=\"button secondary\" href=\"#recruit\">모집 안내 보기</a>\n            </div>\n            <div class=\"hero-points\">\n              <div class=\"hero-point\">\n                <strong>회복 중심 상담</strong>\n                <p>치료를 넘어 회복과 일상 복귀까지 함께 이해하는 상담 프레임</p>\n              </div>\n              <div class=\"hero-point\">\n                <strong>실무 적용형 커리큘럼</strong>\n                <p>종양학, 영양, 운동, 설문·검사 해석, 상담 흐름까지 연결</p>\n              </div>\n              <div class=\"hero-point\">\n                <strong>네트워크 확장성</strong>\n                <p>향후 캠브록스 서비스와 전문 약국 네트워크 참여 기반</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"hero-signature\">\n            <div class=\"sig-badge\">Academy</div>\n            <div>\n              <strong style=\"display:block; color:var(--ink); margin-bottom:4px;\">약국의 새로운 역할은, 더 깊은 상담에서 시작됩니다.</strong>\n              <span>암 전문상담약사 · 회복 중심 실무 · 프리미엄 상담 역량</span>\n            </div>\n          </div>\n        </div>\n\n        <aside class=\"hero-panel\" aria-label=\"아카데미 핵심 정보\">\n          <div class=\"hero-panel-top\">\n            <span>Program Preview</span>\n            <span class=\"status-pill\">모집 예정</span>\n          </div>\n\n          <div class=\"program-preview\">\n            <span class=\"label\">Academy Summary</span>\n            <div class=\"headline\">암 환자 회복 상담 역량을 약국 현장에 연결하는 8주 전문 과정</div>\n            <p class=\"muted\">종양학적 이해, 통합의학적 관점, 생활관리, 실무 적용, 향후 캠브록스 지원 프로그램 연계까지 고려한 구조입니다.</p>\n          </div>\n\n          <div class=\"stats-grid\">\n            <div class=\"stat\">\n              <strong>8주</strong>\n              <span>기본 과정 기준의 전문 커리큘럼</span>\n            </div>\n            <div class=\"stat\">\n              <strong>50시간+</strong>\n              <span>강의·사례·적용 관점을 포함한 학습 시간</span>\n            </div>\n            <div class=\"stat\">\n              <strong>20년+</strong>\n              <span>문창식 원장 중심의 임상 철학과 방향성</span>\n            </div>\n            <div class=\"stat\">\n              <strong>∞</strong>\n              <span>설명회·후속 프로그램·네트워크 확장 가능성</span>\n            </div>\n          </div>\n\n          <div class=\"journey-card\">\n            <strong style=\"font-size:18px;\">교육 이후의 연결 구조</strong>\n            <div class=\"journey-flow\">\n              <div class=\"journey-step\">\n                <div class=\"journey-index\">1</div>\n                <div><strong>지식 습득</strong><br><span>종양학, 면역, 영양, 회복 관리 관점의 체계화</span></div>\n              </div>\n              <div class=\"journey-step\">\n                <div class=\"journey-index\">2</div>\n                <div><strong>상담 구조화</strong><br><span>환자·보호자 상담 흐름과 실제 응대 역량 강화</span></div>\n              </div>\n              <div class=\"journey-step\">\n                <div class=\"journey-index\">3</div>\n                <div><strong>프로그램 연계</strong><br><span>설문·검사·환자 상태 기반 보조 도구와 확장</span></div>\n              </div>\n              <div class=\"journey-step\">\n                <div class=\"journey-index\">4</div>\n                <div><strong>네트워크 참여</strong><br><span>캠브록스 생태계와 전문 약국 포지셔닝 기반 마련</span></div>\n              </div>\n            </div>\n          </div>\n        </aside>\n      </div>\n    </section>\n\n    <section id=\"why\">\n      <div class=\"container\">\n        <div class=\"section-heading\">\n          <span class=\"eyebrow\">Why Now</span>\n          <h2>왜 지금, 암 전문상담약사인가</h2>\n          <p>암 환자와 보호자는 약국에서 더 깊고 실질적인 상담을 기대합니다. 하지만 암은 종양학, 면역, 영양, 운동, 치료 부작용 관리, 생활요법까지 연결된 복합 영역입니다. 캠브록스 아카데미는 약사가 회복 여정을 함께 이해하는 상담 파트너로 성장하도록 돕습니다.</p>\n        </div>\n        <div class=\"grid-3\">\n          <article class=\"section-card\">\n            <span class=\"kicker\">01 전문성</span>\n            <h3>근거 기반 암 이해와 상담 역량 강화</h3>\n            <p>막연한 건강상담이 아니라, 암 환자의 상태와 치료 맥락을 체계적으로 읽고 설명하는 프레임을 제안합니다.</p>\n          </article>\n          <article class=\"section-card\">\n            <span class=\"kicker\">02 실무성</span>\n            <h3>환자 사례와 현장 적용 중심</h3>\n            <p>설문, 검사, 치료 이력, 생활관리, 회복 흐름을 어떻게 상담에 도움이될지 실제 현장 언어로 풀어냅니다.</p>\n          </article>\n          <article class=\"section-card\">\n            <span class=\"kicker\">03 확장성</span>\n            <h3>서비스와 네트워크로 이어지는 기반</h3>\n            <p>교육에서 끝나지 않고, 향후 캠브록스 상담 지원 시스템과 전문 약국 네트워크 참여 가능성을 함께 열어둡니다.</p>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class=\"container split-feature\">\n        <article class=\"quote-card\">\n          <div class=\"quote-mark\">“</div>\n          <h2 style=\"font-size: clamp(28px, 3.8vw, 44px); margin-top: 8px;\">치료를 넘어, 회복과 일상 복귀까지</h2>\n          <p style=\"margin-top: 18px;\">문창식 원장의 강의는 암을 단순히 병변이나 치료 행위만으로 보지 않습니다. 치료 과정에서의 변화, 회복의 속도, 영양과 운동, 생활관리, 부작용 대응, 환자와 보호자의 심리적 부담까지 함께 바라보는 관점에서 출발합니다.</p>\n        </article>\n        <article class=\"section-card\">\n          <span class=\"kicker\">Academy </span>\n          <h3>캠브록스 아카데미란?</h3>\n          <p style=\"margin-top: 14px;\">캠브록스 아카데미는 암 환자 상담에 필요한 종양학적 이해, 통합의학적 관점, 영양·운동·생활관리, 상담 실무, 환자 상태 분석 관점을 종합적으로 다루는 전문 교육 프로그램입니다.</p>\n          <p style=\"margin-top: 14px;\">단순한 정보 전달이 아니라, 약사가 실제 현장에서 환자와 보호자를 더 깊이 이해하고 상담할 수 있도록 돕는 실전형 아카데미로 설계되었습니다.</p>\n          <ul class=\"value-list\" style=\"margin-top: 18px;\">\n            <li>약 8주 과정 기준의 전문 커리큘럼</li>\n            <li>약 50시간 내외의 강의·사례·적용형 구성</li>\n            <li>심화 교육 및 네트워크 연계로 확장 가능한 구조</li>\n          </ul>\n        </article>\n      </div>\n    </section>\n\n    <section>\n      <div class=\"container\">\n        <div class=\"section-heading\">\n          <span class=\"eyebrow\">강사 소개</span>\n          <h2>문창식 원장님</h2>\n          <div class=\"instructor-photo-card\" aria-label=\"문창식 원장님 프로필 이미지 영역\">\n            <img src=\"/images/mqiolljm-photo_2026-06-15_20.25.25.jpeg\" alt=\"문창식 원장님 프로필 사진\" loading=\"lazy\">\n            <span>문창식 원장</span>\n          </div>\n          <p style=\"margin-top: 20px;\">문창식 원장님은 나으람의원 대표 전문의로, 전남대학교 의과대학을 졸업하셨습니다. 일반외과 전문의, 보완대체의학인정의, 한국 임상 호메오퍼시 의사회 고문이며 아우토겐 이완요법 촉진자 자격 보유하고 있습니다. 현재 임상통합의학암학회 회장, 임상통합의학 암아카데미원장, 대한 암치료 병원 협의회 회장, 암알지 방송국 대표, 공주 대학교 통합 의료관광 대학원 교수, 채원 자연통합병원 암센터 원장으로 근무하셨습니다. 저서로는 『최고의 전문의들은 왜 통합기능의학에 주목할까』, 『나만의 항암음식을 찾아줍니다』, 『암과 싸워서 이기는 방법』, 『하네만 리비지트』(공저)가 있습니다.</p>\n        </div>\n        <div class=\"grid-2\">\n          <article class=\"section-card\">\n            <span class=\"kicker\">Clinical Philosophy</span>\n            <h3>암특화 약 20년 이상의 전문성과 노하우</h3>\n            <ul class=\"target-list\" style=\"margin-top: 16px;\">\n              <li>통합의학적 암치료와 맞춤형 회복 지원 관점</li>\n              <li>암중점치료, 후성 유전학적 치료, 치료 지원 시스템에 대한 전문성</li>\n              <li>영양·운동·생활관리까지 아우르는 회복 중심 프레임</li>\n              <li>환자와 보호자의 불안과 질문을 함께 이해하는 동행형 접근</li>\n            </ul>\n          </article>\n          <article class=\"section-card\">\n            <span class=\"kicker\">Educational Promise</span>\n            <h3>약사님 특화 아카데미</h3>\n            <ul class=\"target-list\" style=\"margin-top: 16px;\">\n              <li>실제 임상에서 나온 문제의식을 약사 현장으로 번역</li>\n              <li>회복 중심 상담 역량을 위한 관점·언어·구조 제공</li>\n              <li>환자 상태 기반 이해를 돕는 검사·설문·상담 흐름 연결</li>\n              <li>향후 캠브록스 프로그램과 연동한 지원 제공</li>\n            </ul>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"curriculum\">\n      <div class=\"container\">\n        <div class=\"section-heading\">\n          <span class=\"eyebrow\">Curriculum</span>\n          <h2>무엇을 배우게 되나요?</h2>\n          <p>캠브록스 아카데미는 암 환자 상담에 필요한 이론적 이해와 회복 관리 관점, 그리고 실제 상담 적용 역량을 균형 있게 다룹니다. 주차별 일정표를 그대로 나열하기보다, 홈페이지에서는 핵심 주제군 중심으로 정리해 보여주는 방식이 가장 설득력 있습니다.</p>\n        </div>\n        <div class=\"curriculum-grid\">\n          <article class=\"curriculum-card\">\n            <span class=\"kicker\">학습 01</span>\n            <h3>암과 통합의학의 이해</h3>\n            <ul style=\"margin-top: 16px;\">\n              <li>통합의학 개요</li>\n              <li>종양학 개론</li>\n              <li>암과 미토콘드리아</li>\n              <li>암 관련 호르몬</li>\n            </ul>\n          </article>\n          <article class=\"curriculum-card\">\n            <span class=\"kicker\">학습 02</span>\n            <h3>면역 · 영양 · 대사</h3>\n            <ul style=\"margin-top: 16px;\">\n              <li>면역 개요와 암 면역</li>\n              <li>암 영양과 종양 미세환경</li>\n              <li>후성유전과 유전변이</li>\n              <li>식물영양소와 기능성 접근</li>\n            </ul>\n          </article>\n          <article class=\"curriculum-card\">\n            <span class=\"kicker\">학습 03</span>\n            <h3>장 · 해독 · 맞춤 치료 이해</h3>\n            <ul style=\"margin-top: 16px;\">\n              <li>해독과 대사 관점</li>\n              <li>장과 마이크로바이옴</li>\n              <li>장기별 항암 치료</li>\n              <li>회복을 위한 개별화 접근</li>\n            </ul>\n          </article>\n          <article class=\"curriculum-card\">\n            <span class=\"kicker\">학습 04</span>\n            <h3>치료와 부작용 관리</h3>\n            <ul style=\"margin-top: 16px;\">\n              <li>항암치료와 방사선치료 이해</li>\n              <li>항암 부작용과 대응</li>\n              <li>Mind-body therapy</li>\n              <li>회복기 환자 관리 관점</li>\n            </ul>\n          </article>\n          <article class=\"curriculum-card\">\n            <span class=\"kicker\">학습 05</span>\n            <h3>생활요법과 회복관리</h3>\n            <ul style=\"margin-top: 16px;\">\n              <li>운동과 암 회복</li>\n              <li>림프부종 및 통증 관리</li>\n              <li>생체리듬과 생활관리</li>\n              <li>Nutraceutical supplements</li>\n            </ul>\n          </article>\n          <article class=\"curriculum-card\">\n            <span class=\"kicker\">학습 06</span>\n            <h3>실무 적용</h3>\n            <ul style=\"margin-top: 16px;\">\n              <li>검사 데이터 분석</li>\n              <li>암환자 설문지 작성 및 분석</li>\n              <li>의무기록 리뷰</li>\n              <li>의료기기 및 치료 보조 이해</li>\n            </ul>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"benefits\">\n      <div class=\"container\">\n        <div class=\"section-heading\">\n          <span class=\"eyebrow\">Benefits</span>\n          <h2>수강을 통해 얻게 되는 것들</h2>\n          <p>캠브록스 아카데미는 단순히 “배웠다”는 느낌보다, 실제 약국에서 환자와 보호자를 상대하는 방식이 달라지도록 설계됩니다. 현장의 가장 가까이 그리고 자주 환자와 마주할 약사님들에 대한 지원이 캠브록스 주요 가치 중 한축 입니다.</p>\n        </div>\n        <div class=\"grid-2\">\n          <article class=\"section-card\">\n            <span class=\"kicker\">01</span>\n            <h3>암 상담의 구조화</h3>\n            <p style=\"margin-top: 12px;\">막연한 설명이 아니라 환자의 상태와 회복 단계에 맞춰 상담의 흐름을 설계하는 프레임을 갖출 수 있습니다.</p>\n          </article>\n          <article class=\"section-card\">\n            <span class=\"kicker\">02</span>\n            <h3>환자와 보호자 응대 역량 강화</h3>\n            <p style=\"margin-top: 12px;\">실제 현장에서 자주 마주치는 질문과 불안을 보다 깊이 있고 신뢰감 있게 다룰 수 있게합니다.</p>\n          </article>\n          <article class=\"section-card\">\n            <span class=\"kicker\">03</span>\n            <h3>약국의 차별화 포지셔닝</h3>\n            <p style=\"margin-top: 12px;\">일반 복약상담을 넘어, 암 전문상담약사라는 새로운 전문성과 고부가가치 상담 영역을 구축할 수 있습니다.</p>\n          </article>\n          <article class=\"section-card\">\n            <span class=\"kicker\">04</span>\n            <h3>향후 연계 가능한 내외부 시스템들</h3>\n            <p style=\"margin-top: 12px;\">행정편의, 내부 캠브록스 시스템, 외부 제휴사, 아카데미, 설명회, 자료공유, 네트워크 참여 기회와 자연스럽게 연결되는 기반을 마련합니다.</p>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class=\"container split-feature\">\n        <article class=\"section-card\">\n          <span class=\"kicker\">체계적 관리와 지원</span>\n          <h3>교육에서 끝나지 않도록</h3>\n          <p style=\"margin-top: 14px;\">캠브록스는 아카데미를 통해 전문성을 높이는 데서 그치지 않고, 향후 환자 정보 수집, 설문, 검사 결과 해석, 상담 보조 흐름을 지원하는 프로그램과의 연계를 통해 약사의 상담 역량이 실제 현장에서 이어질 수 있도록 준비하고 있습니다.</p>\n          <ul class=\"value-list\" style=\"margin-top: 18px;\">\n            <li>환자 정보 수집과 상태 이해</li>\n            <li>설문 기반 회복 맥락 정리</li>\n            <li>검사·상담 내용의 구조화</li>\n            <li>상담관리 솔루션 지원</li>\n          </ul>\n        </article>\n        <article class=\"section-card\">\n          <span class=\"kicker\">맞춤 지원</span>\n          <h3>이런 약사님께 추천드립니다</h3>\n          <ul class=\"target-list\" style=\"margin-top: 16px;\">\n            <li>암 환자 및 보호자 상담 역량을 높이고 싶은 약사님</li>\n            <li>약국의 전문성과 차별화를 고민하고 있는 약사님</li>\n            <li>통합의학적 관점과 회복 중심 상담에 관심 있는 약사님</li>\n            <li>향후 캠브록스 서비스 및 네트워크 참여에 관심 있는 약사님</li>\n            <li>고부가가치 상담 영역을 만들고 싶은 약사님</li>\n          </ul>\n        </article>\n      </div>\n    </section>\n\n    <section id=\"recruit\">\n      <div class=\"container\">\n        <div class=\"section-heading\">\n          <span class=\"eyebrow\">Recruitment</span>\n          <h2>모집 안내</h2>\n          <p>각 교육회차는 회차 강의의 집중도 유지를 위해 진행 중 신청 및 참가가 불가합니다. 각 회차의 교육은 해당 회차의 강사님과 수강생님들의 상황에 맞춰 내용과 순서가 변동이 있을 수 있습니다.</p>\n        </div>\n        <div class=\"recruit-table\">\n          <table>\n            <tbody>\n              <tr>\n                <th>모집 대상</th>\n                <td>약사님</td>\n              </tr>\n              <tr>\n                <th>교육 형태</th>\n                <td>오프라인</td>\n              </tr>\n              <tr>\n                <th>교육 기간</th>\n                <td>8주 과정</td>\n              </tr>\n              <tr>\n                <th>교육 내용</th>\n                <td>암 상담 이론, 회복 관리, 실무 적용 중심 맞춤 교육</td>\n              </tr>\n              <tr>\n                <th>신청 방법</th>\n                <td>신청 폼 제출 후 순차 안내</td>\n              </tr>\n              <tr>\n                <th>모집 인원</th>\n                <td>각 회차별 모집 공고 내 안내</td>\n              </tr>\n              <tr>\n                <th>문의 채널</th>\n                <td>캠브록스 홈페이지 또는 신청폼</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </section>\n\n    <section id=\"apply\">\n      <div class=\"container\">\n        <div class=\"cta-band\">\n          <div>\n            <span class=\"eyebrow\">Apply & Updates</span>\n            <h2 style=\"margin-top: 16px;\">사전알림 및 신청알림을 가장 먼저 받아보세요</h2>\n            <p style=\"margin-top: 14px; max-width: 760px; color: var(--muted);\">문창식 원장님의 강의자료, 아카데미 개설 소식, 설명회 일정, 그리고 캠브록스 런칭 정보와 우선 기회를 가장 먼저 받아보실 수 있습니다.</p>\n          </div>\n          <div class=\"cta-actions\">\n            <a class=\"button primary\" href=\"#\">사전알림 신청하기</a>\n            <a class=\"button secondary\" href=\"#\">교육 신청하기</a>\n            <a class=\"button secondary\" href=\"#\">문의하기</a>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class=\"container\">\n        <div class=\"section-heading\">\n          <span class=\"eyebrow\">FAQ</span>\n          <h2>자주 묻는 질문</h2>\n          <p>자주 요청받는 문의, 답변 입니다.</p>\n        </div>\n        <div class=\"faq-list\">\n          <article class=\"faq-item\">\n            <strong>Q. 암 환자 상담 경험이 없어도 신청할 수 있나요?</strong>\n            <p>네. 본 과정은 암 상담 역량을 체계적으로 이해하고 확장하고자 하는 약사를 위한 프로그램으로, 기존 경험이 많지 않아도 참여하실 수 있습니다.</p>\n          </article>\n          <article class=\"faq-item\">\n            <strong>Q. 교육은 어떤 방식으로 진행되나요?</strong>\n            <p>운영 방식은 기수별로 다를 수 있으며, 오프라인, 온라인 으로 안내될 예정입니다.</p>\n          </article>\n          <article class=\"faq-item\">\n            <strong>Q. 수강 후 별도의 연계 프로그램이 있나요?</strong>\n            <p>캠브록스는 향후 상담 지원 프로그램, 설명회, 네트워크 연계 등 다양한 확장 가능성을 준비하고 있습니다. 자세한 내용은 모집 안내 시 함께 공지됩니다.</p>\n          </article>\n          <article class=\"faq-item\">\n            <strong>Q. 설명회만 먼저 신청할 수 있나요?</strong>\n            <p>네. 모집 신청 전 설명회 또는 알림 신청만 먼저 하실 수 있습니다.</p>\n          </article>\n          <article class=\"faq-item\">\n            <strong>Q. 전체 커리큘럼을 더 자세히 볼 수 있나요?</strong>\n            <p>알림 발송되는 모집 시점에 보다 상세한 커리큘럼과 운영안이 함께 안내될 예정입니다.</p>\n          </article>\n        </div>\n      </div>\n    </section>";

const academyContentWithLogoHtml = academyContentHtml.replace(
  '<div class="sig-badge">Academy</div>',
  '<div class="sig-badge"><img src="/images/mplc24vr-logo-transparent.png" alt="KAMBROX" /></div>'
);

const companyInfo: [string, string][] = [
  ["대표자", "문명훈"],
  ["주소", "서울시 은평구 통일로71길 2-1, 4층 16호(대조동, 대조빌딩)"],
  ["대표번호", "02-6956-1133"],
  ["사업자 등록번호", "364-87-03182"]
];

const detailNav = [
  { label: "홈", href: "/" },
  { label: "아카데미", href: "/academy", current: true },
  { label: "수소치료기", href: "/product1-detail" },
  { label: "건강식", href: "/product2-detail" }
];

export default function AcademyPage() {
  const router = useRouter();

  const handleBack = useCallback(() => {
    if (typeof window !== "undefined") {
      const sameOriginReferrer =
        document.referrer && document.referrer.includes(window.location.host);
      if (sameOriginReferrer && window.history.length > 1) {
        router.back();
        return;
      }
    }
    router.push("/");
  }, [router]);

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

        <div
          className="academy-content"
          data-od-id="academy-content"
          dangerouslySetInnerHTML={{ __html: academyContentWithLogoHtml }}
        />

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
    </div>
  );
}
