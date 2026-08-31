import React from 'react';
import { CategoryServiceDetailLanding } from '../CategoryServiceDetailLanding';
import { getCategoryServiceBySlug } from '../../data/categoryServices';

interface Props {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

export const Dir3KycPage: React.FC<Props> = (props) => {
  const service = getCategoryServiceBySlug('dir-3-kyc')!;
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
