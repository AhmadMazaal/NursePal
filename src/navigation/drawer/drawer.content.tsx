import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { DrawerIcon } from '&types';
import { drawerElements } from '&services/config';
import { AntDesign } from '@expo/vector-icons';

export default function DrawerContent(props: any) {

    async function clearUserInfo(): Promise<void> {
        // if (isAuthentic) {
        //     setUser({} as User);
        //     toggleAuth();
        //     await Promise.all(
        //         [
        //             SecureStore.deleteItemAsync('access_token'),
        //             SecureStore.deleteItemAsync('user_id'),
        //         ]
        //     ).catch(() => { });
        // }
        // props.navigation.reset(
        //     {
        //         index: 0,
        //         routes: [{ name: 'AuthStack' }],
        //     }
        // );
    }

    async function handleLogout(): Promise<void> {
        await clearUserInfo();
    }

    // const uri = user?.profilePic === undefined ?
    //     'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E' :
    //     user?.profilePic;


    const uri = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E';

    return (
        <DrawerContentScrollView
            contentContainerStyle={styles.scrollViewStyle}
            style={styles.drawerContainer}
            drawerContentScrollView
            {...props}
        >
            <View>
                <View style={styles.row}>
                    <Image
                        source={{ uri }}
                        style={styles.profileImage}
                    />
                    <View style={styles.infoContainer}>
                        {
                            <View style={styles.row}>
                                <Text style={styles.fullName}>Joannete Khal</Text>
                                <View style={styles.online} />
                            </View>
                        }
                        <Text style={styles.address}>Lebanon</Text>
                    </View>
                </View>
                {
                    drawerElements.map(
                        (item: DrawerIcon, index: number) => <DrawerItem
                            key={index}
                            labelStyle={styles.label}
                            icon={() => item.icon}
                            label={item.label}
                            onPress={() => { props.navigation.navigate(item.route); }}
                        />
                    )
                }
            </View>
            <DrawerItem
                labelStyle={styles.label}
                icon={() => <AntDesign name="logout" size={24} color="black" />}
                label={'Log out'}
                onPress={handleLogout}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create(
    {
        scrollViewStyle: {
            justifyContent: 'space-between',
            flexGrow: 1,
            paddingBottom: 10,
        },
        drawerContainer: {
            // paddingTop: Constants.statusBarHeight,
        },
        profileImage: {
            width: 75,
            height: 75,
            borderRadius: 50,
            marginLeft: 10,
            marginBottom: 20,
        },
        label: {
            fontSize: 16,
            color: 'black',
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        infoContainer: {
            marginLeft: 10,
            marginTop: 10,
            alignSelf: 'flex-start'
        },
        fullName: {
            fontFamily: 'SemiBold',
            color: 'white',
            fontSize: 17,
            marginRight: 8,
        },
        address: {
            fontFamily: 'Regular',
            marginTop: 6,
            color: 'white'
        },
        online: {
            width: 11,
            height: 11,
            borderRadius: 6,
            backgroundColor: 'green'
        }
    }
);
