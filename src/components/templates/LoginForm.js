import {View, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import {Fonts} from '../../assets/theme';
import {Button, Field} from '..';
import {ScreensName} from '../../screens';
import {useTheme} from 'react-native-paper';
import {useHistory} from '../../hooks';
import {loginUser} from '../../api';
import {AuthContext} from '../../contexts';
import {useFocusEffect} from '@react-navigation/native';

const INIT_FORM_STATE = {
  user_id: '',
  password: '',
};

export const LoginForm = () => {
  const theme = useTheme();
  const styles = makeStyles(theme);
  const {handleNavigation} = useHistory();

  const {
    methods: {setLoginData},
  } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formState, setFormState] = useState(INIT_FORM_STATE);

  const handleFormChange = ({key, value}) => {
    setIsError(false);
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const response = await loginUser(formState);
    if (response.error) {
      setIsError(true);
    } else {
      setLoginData(response.data);
      handleNavigation(ScreensName.OtpVerification);
    }
    setIsLoading(false);
  };

  const handleResetCompState = () => {
    setFormState(INIT_FORM_STATE);
    setIsLoading(false);
    setIsError(false);
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => handleResetCompState();
    }, []),
  );

  return (
    <>
      <View style={styles.formContainer}>
        <Field
          handleChange={handleFormChange}
          value={formState.user_id}
          id="user_id"
          label="User ID"
          error={isError}
        />
        <Field
          id="password"
          label="Password"
          type="password"
          secureTextEntry
          placeholder="Password"
          value={formState.password}
          handleChange={handleFormChange}
          error={isError}
        />

        {/* Forget password */}
        {/* <View style={styles.forgetPasswordSection}>
          <Link
            onPress={() => alert('Forgot password')}
            linkLabel="Forget password?"
            linkLabelColor={theme.colors.offBlack}
          />
        </View> */}

        <Button
          btnLabel={'Login'}
          onPress={handleLogin}
          isLoading={isLoading}
        />
      </View>
    </>
  );
};

const makeStyles = theme =>
  StyleSheet.create({
    formContainer: {
      backgroundColor: theme.colors.offWhite,
      padding: 20,
      borderRadius: 10,
      borderColor: theme.offBlack,
      borderWidth: 1,
    },
    forgetPasswordSection: {
      alignItems: 'flex-end',
      paddingRight: 10,
    },
    formFooter: {
      alignItems: 'flex-end',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingRight: 10,
      paddingTop: 10,
    },
    linkText: {
      color: theme.colors.background,
      fontSize: Fonts.size.font12,
      fontWeight: Fonts.weight.low,
      paddingVertical: 5,
    },
  });
