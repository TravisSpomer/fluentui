import { pxToRem } from '../../../../utils';

export interface SkeletonVariables {
  lineMargin?: string;
  shapeMargin?: string;
  lineBackground?: string;
  shapeBackground?: string;
  animationBackground?: string;
  animationBackgroundSecondary?: string;

  // Skeleton Button
  buttonHeight?: string;
  buttonWidth?: string;
  buttonSmallHeight?: string;
  buttonSmallWidth?: string;
  buttonBackground?: string;
  buttonCircularBorderRadius?: string;

  // Skeleton Avatar
  avatarBackground?: string;
  avatarSmallest?: string;
  avatarSmaller?: string;
  avatarSmall?: string;
  avatarMedium?: string;
  avatarLarge?: string;
  avatarLarger?: string;
  avatarLargest?: string;
}

export const skeletonVariables = (siteVariables): SkeletonVariables => {
  return {
    lineBackground: siteVariables.colorScheme.default.background4,
    shapeBackground: siteVariables.colorScheme.default.background4,
    animationBackground: siteVariables.colorScheme.default.background,
    animationBackgroundSecondary: siteVariables.colorScheme.default.background5,
    lineMargin: `0 0 ${pxToRem(2)} 0`,
    shapeMargin: `0 0 ${pxToRem(2)} 0`,

    // Skeleton Button
    buttonHeight: pxToRem(32),
    buttonWidth: pxToRem(96),
    buttonSmallHeight: pxToRem(24),
    buttonSmallWidth: pxToRem(72),
    buttonBackground: siteVariables.colorScheme.default.background4,
    buttonCircularBorderRadius: pxToRem(999),

    // Skeleton Avatar
    avatarBackground: siteVariables.colorScheme.default.background4,
    avatarSmallest: pxToRem(20),
    avatarSmaller: pxToRem(24),
    avatarSmall: pxToRem(28),
    avatarMedium: pxToRem(32),
    avatarLarge: pxToRem(44),
    avatarLarger: pxToRem(64),
    avatarLargest: pxToRem(96),
  };
};
