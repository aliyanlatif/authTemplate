import { NavigationProp, useNavigation as rnUseNavigation } from '@react-navigation/native';

import type AuthenticatedStackParams from './AuthStackParams';
import type UnAuthenticatedStackParams from './UnAuthStackParams';

export type RootStackParams = AuthenticatedStackParams & UnAuthenticatedStackParams;
export default function useNavigation<T extends object = AuthenticatedStackParams | UnAuthenticatedStackParams>() {
  return rnUseNavigation<NavigationProp<T>>();
}
