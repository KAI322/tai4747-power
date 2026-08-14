/* ==========================================================================
   Taipower Exam Master - 108~114 Comprehensive Exam Database
   ========================================================================== */

const EXAM_DATA = {
  // 科目 B 計算題庫 (電力系統、電機機械、電磁學)
  subjectB: [
    {
      id: "114-B-1",
      year: "114",
      subject: "電力系統",
      subjectTag: "tag-power",
      title: "一、輸電線路特性阻抗 Zc 與傳播常數 γ 計算",
      question: "給予 1 組 138 kV，3 相輸電線路參數，串聯阻抗 z = 0.8 + j 0.6 Ω/m，並聯導納 y = j 2.0 × 10⁻⁶ ℧/m。(1) 求特性阻抗 Zc (2) 求傳播常數 γ。",
      diagram: `
        <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="380" height="100" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
          <line x1="30" y1="40" x2="370" y2="40" stroke="#3b82f6" stroke-width="2.5"/>
          <text x="50" y="32" fill="#60a5fa" font-size="12" font-family="monospace">z = 0.8 + j0.6 Ω/m</text>
          <line x1="200" y1="40" x2="200" y2="80" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4"/>
          <text x="210" y="65" fill="#22d3ee" font-size="12" font-family="monospace">y = j 2.0×10⁻⁶ ℧/m</text>
          <line x1="30" y1="80" x2="370" y2="80" stroke="#64748b" stroke-width="2"/>
          <text x="310" y="100" fill="#94a3b8" font-size="11">輸電線單相等效模型</text>
        </svg>
      `,
      steps: [
        {
          title: "步驟一：轉換阻抗 z 與導納 y 為極座標",
          content: "z = 0.8 + j 0.6 = 1.0 ∠ 36.87° Ω/m<br>y = j 2.0 × 10⁻⁶ = 2.0 × 10⁻⁶ ∠ 90° ℧/m",
          formula: "z = \\sqrt{R^2 + X^2} \\angle \\tan^{-1}(X/R)"
        },
        {
          title: "步驟二：計算特性阻抗 Zc",
          content: "Zc = √(z / y) = √[ (1.0 ∠ 36.87°) / (2.0 × 10⁻⁶ ∠ 90°) ]<br>= √(500,000 ∠ -53.13°) = 707.11 ∠ -26.57° Ω<br>= 632.46 - j 316.23 Ω",
          formula: "Z_c = \\sqrt{\\frac{z}{y}}"
        },
        {
          title: "步驟三：計算傳播常數 γ",
          content: "γ = √(z · y) = √[ 2.0 × 10⁻⁶ ∠ 126.87° ]<br>= 1.4142 × 10⁻³ ∠ 63.44° m⁻¹<br>= 6.32 × 10⁻⁴ + j 1.26 × 10⁻³ m⁻¹",
          formula: "\\gamma = \\sqrt{z \\cdot y} = \\alpha + j\\beta"
        }
      ],
      answer: "Zc = 707.11 ∠ -26.57° Ω，γ = 1.41×10⁻³ ∠ 63.44° m⁻¹"
    },
    {
      id: "114-B-2",
      year: "114",
      subject: "電力系統",
      subjectTag: "tag-power",
      title: "二、三相電力系統標么值 (pu) 綜合分析",
      question: "發電機 G (100MVA, 22kV, Xg=0.1pu)、變壓器 T1 (50MVA, 22/110kV, XT1=0.05pu)、輸電線 Zline=10+j40Ω、T2 (100MVA, 110/11kV, XT2=0.1pu)、負載 Zload=2.42Ω。基準值 Sb=100MVA, Vb1=22kV。求各段電流與負載電壓。",
      diagram: `
        <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="60" r="22" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
          <text x="35" y="65" fill="#3b82f6" font-size="14" font-weight="bold">G</text>
          <circle cx="100" cy="60" r="14" fill="none" stroke="#10b981" stroke-width="2"/>
          <circle cx="118" cy="60" r="14" fill="none" stroke="#10b981" stroke-width="2"/>
          <text x="95" y="95" fill="#34d399" font-size="10">T1: 50MVA</text>
          <line x1="135" y1="60" x2="250" y2="60" stroke="#f59e0b" stroke-width="2"/>
          <text x="155" y="50" fill="#fbbf24" font-size="11">Zline=10+j40Ω</text>
          <circle cx="270" cy="60" r="14" fill="none" stroke="#10b981" stroke-width="2"/>
          <circle cx="288" cy="60" r="14" fill="none" stroke="#10b981" stroke-width="2"/>
          <rect x="330" y="45" width="55" height="30" fill="#1e293b" stroke="#a855f7" stroke-width="2" rx="6"/>
          <text x="342" y="65" fill="#c084fc" font-size="11">負載</text>
        </svg>
      `,
      steps: [
        {
          title: "步驟一：計算區域基準值 (Base Values)",
          content: "區域1 (22kV): I_b1 = 100MVA / (√3 × 22kV) = 2624.32 A<br>區域2 (110kV): Z_b2 = 110² / 100 = 121 Ω, I_b2 = 524.86 A<br>區域3 (11kV): Z_b3 = 11² / 100 = 1.21 Ω, I_b3 = 5248.64 A",
          formula: "Z_{\\text{base}} = \\frac{V_{\\text{base}}^2}{S_{\\text{base}}}"
        },
        {
          title: "步驟二：轉換全系統元件至標么阻抗 (pu)",
          content: "Xg = 0.1 pu<br>XT1(new) = 0.05 × (100/50) × (22/22)² = 0.10 pu<br>Zline(pu) = (10 + j40) / 121 = 0.0826 + j0.3306 pu<br>XT2 = 0.10 pu<br>Zload(pu) = 2.42 / 1.21 = 2.0 pu",
          formula: "X_{\\text{new}} = X_{\\text{old}} \\times \\frac{S_{\\text{new}}}{S_{\\text{old}}} \\times \\left(\\frac{V_{\\text{old}}}{V_{\\text{new}}}\\right)^2"
        },
        {
          title: "步驟三：求解標么電流與實際物理量",
          content: "Ztotal(pu) = 2.0826 + j0.6306 pu, |Ztotal| = 2.176 pu<br>I(pu) = 1.0 / 2.176 = 0.46 pu<br>發電機電流 IG = 0.46 pu (1205.87 A)<br>輸電線電流 ILine = 0.46 pu (241.17 A)<br>負載電流 ILoad = 0.46 pu (2411.75 A)<br>負載電壓 VLoad = 0.92 pu (10.11 kV)<br>負載功率 PLoad = 42.23 MW",
          formula: "I_{\\text{pu}} = \\frac{V_{\\text{pu}}}{Z_{\\text{pu}}}, P_{\\text{real}} = P_{\\text{pu}} \\times S_{\\text{base}}"
        }
      ],
      answer: "IG=1205.87A, ILine=241.17A, ILoad=2411.75A, VLoad=10.11kV, PLoad=42.23MW"
    },
    {
      id: "114-B-3",
      year: "114",
      subject: "電機機械",
      subjectTag: "tag-machine",
      title: "三、單相變壓器短路試驗與負載特性",
      question: "10kVA, 2000V/200V 單相變壓器短路試驗：Vsc=100V, Isc=5A, Psc=300W。低壓側接負載 ZL=6+j8Ω，維持 V2=200V。求一次側電流 I1、一次側電壓 V1 與功率因數。",
      diagram: `
        <svg viewBox="0 0 380 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="80" height="70" fill="#1e293b" stroke="#3b82f6" rx="8"/>
          <text x="35" y="60" fill="#60a5fa" font-size="12">一次側 V1</text>
          <path d="M 110 35 Q 120 20 130 35 Q 140 50 150 35 Q 160 20 170 35" fill="none" stroke="#10b981" stroke-width="2.5"/>
          <path d="M 110 75 Q 120 60 130 75 Q 140 90 150 75 Q 160 60 170 75" fill="none" stroke="#10b981" stroke-width="2.5"/>
          <rect x="200" y="30" width="140" height="50" fill="#1e293b" stroke="#a855f7" rx="8"/>
          <text x="215" y="60" fill="#c084fc" font-size="12">負載 ZL=6+j8Ω</text>
        </svg>
      `,
      steps: [
        {
          title: "步驟一：求高壓側等效阻抗 Zeq1",
          content: "Req1 = Psc / Isc² = 300 / 5² = 12 Ω<br>|Zeq1| = Vsc / Isc = 100 / 5 = 20 Ω<br>Xeq1 = √(20² - 12²) = 16 Ω ⇒ Zeq1 = 12 + j16 Ω",
          formula: "R_{\\text{eq}} = \\frac{P_{sc}}{I_{sc}^2}, Z_{\\text{eq}} = \\frac{V_{sc}}{I_{sc}}"
        },
        {
          title: "步驟二：將負載折算至高壓側 (a = 2000/200 = 10)",
          content: "ZL' = a² × ZL = 100 × (6 + j8) = 600 + j800 Ω<br>V2' = a × V2 = 10 × 200 = 2000 ∠ 0° V",
          formula: "Z_L' = a^2 Z_L, V_2' = a V_2"
        },
        {
          title: "步驟三：求一次側電流 I1、電壓 V1 與功率因數",
          content: "I1 = V2' / ZL' = 2000 / (600 + j800) = 2.0 ∠ -53.13° A<br>V1 = V2' + I1 × Zeq1 = 2000 + (2.0 ∠ -53.13°) × (20 ∠ 53.13°)<br>= 2000 + 40 = 2040 V<br>PF1 = cos(53.13°) = 0.6 落後",
          formula: "V_1 = V_2' + I_1 Z_{\\text{eq1}}"
        }
      ],
      answer: "I1 = 2.0 A, V1 = 2040 V, PF1 = 0.6 落後"
    },
    {
      id: "114-B-4",
      year: "114",
      subject: "電機機械",
      subjectTag: "tag-machine",
      title: "四、自耦變壓器額定容量與最大效率計算",
      question: "10kVA, 220V/110V 單相變壓器接成 330V/220V 自耦變壓器。(1) 求自耦容量 (2) 滿載 pf=0.95 效率 98% 之損失 (3) 原變壓器滿載效率 (4) 鐵損 100W 時最大效率。",
      diagram: `
        <svg viewBox="0 0 360 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="320" height="80" rx="10" fill="#0f172a" stroke="#3b82f6"/>
          <text x="40" y="45" fill="#60a5fa" font-size="13" font-weight="bold">自耦接點 330V / 220V</text>
          <text x="40" y="70" fill="#94a3b8" font-size="12">共用繞組比: S_auto = S_2w × (Vh / (Vh - Vl))</text>
        </svg>
      `,
      steps: [
        {
          title: "步驟一：求自耦變壓器額定容量",
          content: "S_auto = S_2w × [ Vh / (Vh - Vl) ] = 10 kVA × [ 330 / (330 - 220) ] = 30 kVA",
          formula: "S_{\\text{auto}} = S_{\\text{2w}} \\times \\frac{V_H}{V_H - V_L}"
        },
        {
          title: "步驟二：求自耦變壓器總損失",
          content: "Pout(auto) = 30 kVA × 0.95 = 28.5 kW<br>Ploss = Pout × (1 - 0.98) / 0.98 = 581.63 W",
          formula: "P_{\\text{loss}} = P_{\\text{out}} \\times \\left(\\frac{1 - \\eta}{\\eta}\\right)"
        },
        {
          title: "步驟三：求原雙繞組變壓器滿載與最大效率",
          content: "原變壓器滿載損失亦為 581.63 W<br>η_2w = 9.5kW / (9.5kW + 0.58163kW) = 94.23%<br>若 鐵損 Pi = 100W ⇒ 銅損 Pcu = 481.63W<br>最大效率發生於 Pcu = Pi = 100W，負載率 x = √(100/481.63) = 0.4557<br>η_max = (0.4557 × 9.5kW) / (0.4557 × 9.5kW + 0.2kW) = 95.58%",
          formula: "x = \\sqrt{\\frac{P_i}{P_{cu,\\text{FL}}}}, \\eta_{\\max} = \\frac{x P_{\\text{out}}}{x P_{\\text{out}} + 2 P_i}"
        }
      ],
      answer: "自耦容量: 30 kVA, 損失: 581.63 W, 原滿載效率: 94.23%, 最大效率: 95.58%"
    },
    {
      id: "113-B-1",
      year: "113",
      subject: "電力系統",
      subjectTag: "tag-power",
      title: "一、單相標么電路圖與負載電流計算",
      question: "基準選定：區域 1 之 S_B = 30 kVA, V_B1 = 240 V。電源 Vs = 220∠0° V，T1: 30kVA 240/480V Xeq1=0.1pu，區域 2 線路 Xline=2Ω，T2: 20kVA 460/115V Xeq2=0.1pu，區域 3 負載 Zload=1+j2Ω。求標么電路圖與負載電流。",
      diagram: `
        <svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="55" r="20" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
          <text x="28" y="60" fill="#60a5fa" font-size="11">Vs=0.917pu</text>
          <rect x="80" y="45" width="40" height="20" fill="#1e293b" stroke="#10b981" rx="4"/>
          <text x="85" y="60" fill="#34d399" font-size="10">j0.100</text>
          <rect x="150" y="45" width="40" height="20" fill="#1e293b" stroke="#f59e0b" rx="4"/>
          <text x="155" y="60" fill="#fbbf24" font-size="10">j0.260</text>
          <rect x="220" y="45" width="40" height="20" fill="#1e293b" stroke="#10b981" rx="4"/>
          <text x="225" y="60" fill="#34d399" font-size="10">j0.138</text>
          <rect x="290" y="40" width="70" height="30" fill="#1e293b" stroke="#a855f7" rx="6"/>
          <text x="295" y="60" fill="#c084fc" font-size="10">2.083+j4.167</text>
        </svg>
      `,
      steps: [
        {
          title: "步驟一：求各區域基準電壓與基準阻抗",
          content: "V_B1 = 240 V, V_B2 = 480 V (Z_B2 = 480²/30k = 7.68 Ω)<br>V_B3 = 120 V (Z_B3 = 120²/30k = 0.48 Ω, I_B3 = 250 A)",
          formula: "Z_{\\text{base}} = \\frac{V_{\\text{base}}^2}{S_{\\text{base}}}"
        },
        {
          title: "步驟二：求全系統標么值",
          content: "Vs(pu) = 220/240 = 0.917 pu<br>Xeq1 = j0.100 pu<br>Xline(pu) = j(2/7.68) = j0.260 pu<br>Xeq2(new) = 0.1 × (30/20) × (460/480)² = j0.138 pu<br>Zload(pu) = (1+j2)/0.48 = 2.083 + j4.167 pu",
          formula: "Z_{\\text{pu}} = \\frac{Z_{\\text{actual}}}{Z_{\\text{base}}}"
        },
        {
          title: "步驟三：求總電流 (pu 與 安培)",
          content: "Ztotal(pu) = 2.083 + j4.665 pu (|Ztotal| = 5.107 pu)<br>I(pu) = 0.917 / 5.107 = 0.180 pu<br>I(A) = 0.180 × 250 A = 44.89 A",
          formula: "I_{\\text{actual}} = I_{\\text{pu}} \\times I_{\\text{base}}"
        }
      ],
      answer: "I = 0.180 pu (44.89 A)"
    },
    {
      id: "113-B-2",
      year: "113",
      subject: "電力系統",
      subjectTag: "tag-power",
      title: "二、發電機經濟調度 (Economic Dispatch)",
      question: "兩部機組熱耗率 H1=1000+60P1+0.02P1², 燃料成本 $1.25/MBtu; H2=2500+40P2+0.05P2², 燃料成本 $1.00/MBtu。總負載 500MW。(1) 求最佳發電量 P1, P2 (2) 求總發電成本。",
      diagram: `
        <svg viewBox="0 0 380 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="150" height="70" fill="#1e293b" stroke="#10b981" rx="8"/>
          <text x="35" y="45" fill="#34d399" font-size="12" font-weight="bold">機組 G1</text>
          <text x="35" y="70" fill="#94a3b8" font-size="11">dC1/dP1 = 75 + 0.05P1</text>
          <rect x="210" y="20" width="150" height="70" fill="#1e293b" stroke="#06b6d4" rx="8"/>
          <text x="225" y="45" fill="#22d3ee" font-size="12" font-weight="bold">機組 G2</text>
          <text x="225" y="70" fill="#94a3b8" font-size="11">dC2/dP2 = 40 + 0.10P2</text>
        </svg>
      `,
      steps: [
        {
          title: "步驟一：建立成本函數 C1(P1) 與 C2(P2)",
          content: "C1(P1) = 1.25 × (1000 + 60P1 + 0.02P1²) = 1250 + 75P1 + 0.025P1² $/h<br>C2(P2) = 1.00 × (2500 + 40P2 + 0.05P2²) = 2500 + 40P2 + 0.05P2² $/h",
          formula: "C(P) = \\text{Fuel Price} \\times H(P)"
        },
        {
          title: "步驟二：求解等遞增成本條件 (λ1 = λ2)",
          content: "dC1/dP1 = 75 + 0.05 P1<br>dC2/dP2 = 40 + 0.10 P2<br>令 75 + 0.05 P1 = 40 + 0.10 P2 ⇒ P1 - 2 P2 = -700<br>配合 P1 + P2 = 500 ⇒ P2 = 400 MW, P1 = 100 MW",
          formula: "\\frac{dC_1}{dP_1} = \\frac{dC_2}{dP_2} = \\lambda, P_1 + P_2 = P_D"
        },
        {
          title: "步驟三：計算發電總成本",
          content: "C1(100) = 1250 + 7500 + 250 = $9000 / h<br>C2(400) = 2500 + 16000 + 8000 = $26500 / h<br>Ctotal = 9000 + 26500 = $35,500 / h",
          formula: "C_{\\text{total}} = C_1(P_1) + C_2(P_2)"
        }
      ],
      answer: "P1 = 100 MW, P2 = 400 MW, 總成本 = $35,500 / hr"
    },
    {
      id: "112-B-3",
      year: "112",
      subject: "電力系統",
      subjectTag: "tag-power",
      title: "三、100MVA 單相接地故障 (SLG) 序網絡與故障電流",
      question: "100MVA 20kV 發電機 X1=X2=0.1pu, X0=0.05pu，中性點接地電抗器 Xn=0.2Ω。端點發生 a 相單相接地故障。求 Xn(pu) 與 a 相故障電流 Ia (kA)。",
      diagram: `
        <svg viewBox="0 0 380 110" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="340" height="75" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" rx="10"/>
          <text x="35" y="45" fill="#f87171" font-size="12" font-weight="bold">單相接地故障 (SLG) 序網路串聯</text>
          <text x="35" y="70" fill="#94a3b8" font-size="11">Z0 + Z1 + Z2 = j(0.10 + 0.10 + 0.20) = j0.40 pu</text>
        </svg>
      `,
      steps: [
        {
          title: "步驟一：求接地電抗器 Xn 的標么值",
          content: "基準阻抗 Z_base = 20² / 100 = 4 Ω<br>Xn(pu) = 0.2 / 4 = 0.05 pu<br>零序網路中 3Xn = 3 × 0.05 = 0.15 pu",
          formula: "Z_{\\text{base}} = \\frac{V_{\\text{base}}^2}{S_{\\text{base}}}"
        },
        {
          title: "步驟二：組裝三序網路串聯總阻抗",
          content: "X_sum = X1 + X2 + (X0 + 3Xn) = 0.10 + 0.10 + (0.05 + 0.15) = 0.40 pu",
          formula: "Z_{\\text{total}} = Z_1 + Z_2 + Z_0"
        },
        {
          title: "步驟三：求 a 相總故障電流 Ia (kA)",
          content: "Ia1 = 1.0 / (j 0.40) = -j 2.50 pu<br>Ia = 3 × Ia1 = 7.50 pu<br>基底電流 I_base = 100MVA / (√3 × 20kV) = 2.887 kA<br>Ia = 7.50 × 2.887 kA = 21.65 kA",
          formula: "I_a = 3 I_{a1} = 3 \\frac{E_a}{Z_1 + Z_2 + Z_0}"
        }
      ],
      answer: "Xn = 0.05 pu, Ia = 21.65 kA"
    },
    {
      id: "108-B-6",
      year: "108",
      subject: "電磁學",
      subjectTag: "tag-em",
      title: "六、均勻磁化圓柱磁棒之磁通密度與中心點磁場推導",
      question: "均勻磁化圓柱磁棒，半徑 a，長度 L，軸向磁化向量 M = aM0。(1) 推導 Z 軸上任一點 P(0,0,z) 之磁通密度 B (2) 證明中心點 P0 之磁通密度大於兩端 P1, P1'。",
      diagram: `
        <svg viewBox="0 0 380 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="140" y="20" width="100" height="80" fill="none" stroke="#a855f7" stroke-width="2" rx="4"/>
          <line x1="190" y1="5" x2="190" y2="115" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3"/>
          <circle cx="190" cy="60" r="4" fill="#ef4444"/>
          <text x="200" y="65" fill="#f87171" font-size="11">P0 (中心點)</text>
          <circle cx="190" cy="20" r="4" fill="#3b82f6"/>
          <text x="200" y="25" fill="#60a5fa" font-size="11">P1 (頂端)</text>
          <text x="80" y="65" fill="#c084fc" font-size="12" font-weight="bold">M = M0 az</text>
        </svg>
      `,
      steps: [
        {
          title: "步驟一：求等效束縛電流 (Bound Current)",
          content: "Jb = ∇ × M = 0 (體積束縛電流)<br>Kb = M × ân = M0 âz × âρ = M0 âφ (表面束縛電流)<br>相當於長度 L、單位長度電流 M0 之螺線管磁場。",
          formula: "\\mathbf{J}_b = \\nabla \\times \\mathbf{M}, \\mathbf{K}_b = \\mathbf{M} \\times \\hat{\\mathbf{a}}_n"
        },
        {
          title: "步驟二：積分推導 Z 軸磁場公式 B(z)",
          content: "B(z) = (μ0 M0 / 2) [ (z + L/2) / √(a² + (z + L/2)²) - (z - L/2) / √(a² + (z - L/2)²) ] âz",
          formula: "\\mathbf{B}(z) = \\int \\frac{\\mu_0 dI a^2}{2 [a^2 + (z - z')^2]^{3/2}} \\hat{\\mathbf{a}}_z"
        },
        {
          title: "步驟三：證明中心點磁場 B(0) 大於端點 B(L/2)",
          content: "中心點 B(0) = μ0 M0 L / √(4a² + L²)<br>端點 B(L/2) = (μ0 M0 / 2) L / √(a² + L²)<br>比值 B(0) / B(L/2) = 2√(a²+L²) / √(4a²+L²) = √( (4a²+4L²) / (4a²+L²) ) > 1<br>得證中心點磁通密度大於端點！ Q.E.D.",
          formula: "\\frac{B(0)}{B(L/2)} > 1"
        }
      ],
      answer: "中心點 B(0) 比值證明嚴格大於端點 B(L/2)"
    }
  ],

  // 科目 A 選擇題庫與精選題 (電路學、電子學)
  subjectA: [
    {
      id: "114-A-1",
      year: "114",
      subject: "電路學",
      subjectTag: "tag-circuit",
      title: "114年 第1題：對稱電橋網路總電流計算",
      question: "直流 20V 電壓源連接對稱電阻網路，求總電流 I 為何？",
      options: ["(A) 3 A", "(B) 4 A", "(C) 5 A", "(D) 6 A"],
      correctIndex: 1,
      explanation: "利用電橋平衡原理，中間電阻兩端電位差為 0。等效總阻抗 Req = 5 Ω，總電流 I = 20V / 5Ω = 4 A。"
    },
    {
      id: "114-A-6",
      year: "114",
      subject: "電路學",
      subjectTag: "tag-circuit",
      title: "114年 第6題：交流功率與 R-L 負載相位",
      question: "電源電壓 v(t) = 100 sin(377t + 30°) V，電流 i(t) = 80 cos(377t - 90°) A，則電路組成元件為何？",
      options: ["(A) R-L 串聯電路", "(B) R-C 串聯電路", "(C) 純電阻電路", "(D) 不一定"],
      correctIndex: 0,
      explanation: "將 cos 轉換為 sin：i(t) = 80 sin(377t + 0°) A。電壓相角 30°，電流相角 0°，電壓超前電流 30°（感性），故為 R-L 串聯電路。"
    },
    {
      id: "114-A-9",
      year: "114",
      subject: "電路學",
      subjectTag: "tag-circuit",
      title: "114年 第9題：拉氏轉換反轉換配方與求解",
      question: "假設一拉氏函數為 F(s) = (3s + 7) / (s² + 6s + 13)，求反拉氏轉換 f(t)？",
      options: [
        "(A) e⁻³ᵗ (3 cos 2t - sin 2t)",
        "(B) e³ᵗ (3 cos 2t - sin 2t)",
        "(C) e⁻³ᵗ (3 cos 4t - 7/4 sin 4t)",
        "(D) e⁻³ᵗ (3 cos 2t + sin 2t)"
      ],
      correctIndex: 0,
      explanation: "配方 F(s) = [3(s+3) - 2] / [(s+3)² + 2²] = 3(s+3)/[(s+3)²+2²] - 2/[(s+3)²+2²]，反轉換得 e⁻³ᵗ(3 cos 2t - sin 2t)。"
    },
    {
      id: "113-A-1",
      year: "113",
      subject: "電路學",
      subjectTag: "tag-circuit",
      title: "113年 第1題：直流馬達輸入電流與效率",
      question: "有一 30 馬力 100 伏特之直流馬達，效率為 80%，則輸入電流為何？",
      options: ["(A) 74.6 A", "(B) 279.75 A", "(C) 746 A", "(D) 2797.5 A"],
      correctIndex: 1,
      explanation: "Pout = 30 × 746 = 22,380 W。Pin = 22380 / 0.8 = 27,975 W。I = Pin / 100V = 279.75 A。"
    }
  ],

  // 核心公式庫速查卡片 (Flashcards)
  flashcards: [
    {
      category: "電力系統",
      title: "標么值 (pu) 轉換核心公式",
      formula: "Z_{\\text{base}} = \\frac{V_{\\text{base}}^2}{S_{\\text{base}}}, Z_{\\text{pu}} = \\frac{Z_{\\text{actual}}}{Z_{\\text{base}}}",
      desc: "跨越變壓器變比換算新基準：X_new = X_old × (S_new/S_old) × (V_old/V_new)²"
    },
    {
      category: "電機機械",
      title: "自耦變壓器容量關係",
      formula: "S_{\\text{auto}} = S_{\\text{2w}} \\times \\frac{V_H}{V_H - V_L}",
      desc: "自耦變壓器容量大於原雙繞組容量，但內部損失 P_loss 保持不變！"
    },
    {
      category: "電路學",
      title: "拉氏轉換常用對照",
      formula: "\\mathcal{L}\\{e^{-at}\\cos\\omega t\\} = \\frac{s+a}{(s+a)^2+\\omega^2}",
      desc: "若包含衰減因子 e^-at，頻域進行 (s + a) 位移。"
    },
    {
      category: "電子學",
      title: "MOSFET 飽和區汲極電流",
      formula: "I_D = \\frac{1}{2} k_n' \\frac{W}{L} (V_{GS} - V_{t})^2",
      desc: "飽和條件：V_DS ≥ V_GS - V_t，互導 gm = 2 I_D / (V_GS - V_t)。"
    }
  ]
};
