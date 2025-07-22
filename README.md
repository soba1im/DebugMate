
# 🛠️ Agentica 팀 브랜치 전략 및 작업 가이드

## 📌 현재 상황 요약

- 기존 `main` 브랜치는 커밋 히스토리가 팀원마다 달라 병합(Pull Request)이 불가능한 상태입니다.
- 이에 따라 **새로운 기준 브랜치 `new-main`**을 만들고, 모든 작업은 이 브랜치를 기반으로 진행합니다.

---

## ✅ 앞으로의 브랜치 전략

| 역할         | 브랜치 이름 예시            |
|--------------|------------------------------|
| 공통 기준     | `new-main`                   |
| 개인 작업 브랜치 | `sohee/feature-...`, `jimin/feature-...`, ... |
| PR 대상      | 항상 `new-main` 브랜치로 PR 보낼 것 |

---

## 👣 팀원 작업 지침 (모두 필수)

### 1. 원격 저장소 최신 상태 가져오기

```bash
git fetch origin
````

---

### 2. `new-main` 브랜치 체크아웃 및 생성

```bash
git checkout -b new-main origin/new-main
```

> 💡 `origin/new-main`을 기준으로 로컬 `new-main` 생성

---

### 3. 본인 작업 브랜치 생성

```bash
# 예: 소희
git checkout -b sohee/feature-diary

# 예: 태양
git checkout -b taeyang/feature-upload
```

---

### 4. 작업 후 커밋 & 푸시

```bash
git add .
git commit -m "소희: 일기 작성 기능 구현"
git push origin sohee/feature-diary
```

---

### 5. PR 만들기 (항상 `new-main` 기준!)

* GitHub에서 **base → `new-main`**, **compare → 본인 브랜치**로 PR 생성
* 제목 예시:
  `소희: 일기 작성 기능 구현`
* 리뷰 후 머지 진행

---

## ⚠️ 주의사항

* 기존 `main` 브랜치 기준으로 만든 브랜치는 PR 불가능 (커밋 히스토리 충돌)
* 꼭 `origin/new-main`을 기준으로 **새 브랜치에서 작업 시작**
* `new-main`과 관련 없는 PR은 모두 무시됩니다
