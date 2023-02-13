import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type PublicRoutesType = {};

export type PrivateRoutesType = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export type BottomTabTypes = {};

export type PublicNavigationProps = NativeStackNavigationProp<PublicRoutesType>;

export type PrivateNavigationProps =
  NativeStackNavigationProp<PrivateRoutesType>;

export type StackAndTabType = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabTypes>,
  NativeStackNavigationProp<PrivateRoutesType>
>;

// export type PrivateRootRouteProps<RouteName extends keyof PrivateStackParams> =
//   RouteProp<PrivateStackParams, RouteName>;

export type PrivateRootRouteProps<RouteName extends keyof PrivateRoutesType> =
  RouteProp<PrivateRoutesType, RouteName>;
