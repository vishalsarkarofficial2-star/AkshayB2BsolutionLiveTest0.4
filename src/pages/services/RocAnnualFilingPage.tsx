import React from 'react';
import { CategoryServiceDetailLanding } from '../CategoryServiceDetailLanding';
import { getCategoryServiceBySlug } from '../../data/categoryServices';

interface Props {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

export const RocAnnualFilingPage: React.FC<Props> = (props) => {
  const service = getCategoryServiceBySlug('roc-annual-filing')!;
  return (
    <CategoryServiceDetailLanding
      service={service}
      onBackToHome={props.onBackToHome}
      onSelectService={props.onSelectService}
      onOpenBrochure={props.onOpenBrochure}
      onOpenAppointment={props.onOpenAppointment}
    />
  );
};
