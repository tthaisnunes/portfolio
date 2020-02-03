import {
  transition,
  trigger,
  query,
  style,
  animate,
  group
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition(
      `Home => *, 
      * => Contact`,
      [query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
      ]),

    transition(
      `About => Skills,
      About => Projects,
      About => Projects,
      Skills => Projects`,
      [query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(-100%)' }))
        ], { optional: true }),
      ])
      ]),

    transition(
      `About => Home,
      Skills => Home,
      Skills => About,
      Projects => Home,
      Projects => About,
      Projects => Skills`,
      [query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(-100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(100%)' }))
        ], { optional: true }),
      ])
      ]),

    transition(
      `* => Home, 
        Contact => *`,
      [query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateY(-100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateY(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateY(100%)' }))
        ], { optional: true }),
      ])
      ]),

  ]);