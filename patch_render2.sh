sed -i '/<FloatingActions onOpenChat={() => {}} onCall={() => {}} onWhatsApp={() => {}} \/>/i \
        <Footer onSelectService={handleSelectServiceByName} />\
' src/App.tsx
