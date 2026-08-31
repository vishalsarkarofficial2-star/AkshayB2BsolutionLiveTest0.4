sed -i '/if (lower.includes('\''society'\'')) {/i \
    if (\
      lower.includes('\''legal drafting'\'') ||\
      lower.includes('\''legal agreement'\'') ||\
      lower.includes('\''agreement drafting'\'') ||\
      lower.includes('\''contract drafting'\'') ||\
      lower.includes('\''nda'\'') ||\
      lower.includes('\''sla'\'') ||\
      lower.includes('\''shareholder agreement'\'')\
    ) {\
      setCurrentPage('\''legal-drafting'\'');\
      window.scrollTo({ top: 0, behavior: '\''smooth'\'' });\
      return;\
    }\
' src/App.tsx
