import { useRef, useState } from 'react';
import { Dimensions, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { User } from '&types/models';
import Constants from 'expo-constants';

const { width: screenWidth } = Dimensions.get('screen');

export const HomeScreen: React.FC = () => {

    const [query, setQuery] = useState<string>('');
    const totalExperts = useRef<User[]>([]);

    function handleSearchDoctor(p_query: string): void {
        setQuery(p_query);
        if (p_query.length === 0) {
            // setExperts([...totalExperts.current]);
            return;
        }
        const filteredExperts = totalExperts.current.filter(
            (expert: User) => expert.firstName.toLowerCase().includes(p_query.toLowerCase()) ||
                expert.lastName.toLowerCase().includes(p_query.toLowerCase())
        );
        // setExperts([...filteredExperts]);
    }

    return <>
        {/* {isLoading && <Loader />} */}
        <ScrollView contentContainerStyle={styles.scrollViewStyle} bounces={false} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <ImageBackground
                    source={require('&assets/home/homeBG.jpeg')}
                    style={styles.imageBG}
                >
                    <View style={styles.overlay}>
                        <View>
                            <Text style={styles.title}>
                                Hello there,{'\n'}
                                What Are Your Plans For Today?
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.sliderTitle}>Our Top Suggestions</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Search:</Text>
                    {/* <SearchBox value={query} onChangeText={handleSearchDoctor} placeholder={'Doctor Name'} /> */}
                </View>
                <View style={styles.expertContainer}>
                    {/* {
                            experts.map(
                                (expert: User, index: number) => <ExpertCardComponent
                                    key={`${expert._id}_${String(index)}`}
                                    expert={expert}
                                    index={index} />
                            )
                        } */}
                </View>
            </View>
        </ScrollView>
    </>;
}

const styles = StyleSheet.create(
    {
        scrollViewStyle: {
            flexGrow: 1,
        },
        container: {
            flex: 1,
        },
        title: {
            fontSize: 30,
            fontFamily: 'SemiBold',
            color: 'white',
        },
        bottomContainer: {
            flex: 1,
            marginTop: -25,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
        },
        imageBG: {
            width: screenWidth,
            height: 230,
        },
        overlay: {
            height: '100%',
            width: screenWidth,
            paddingHorizontal: 10,
            backgroundColor: 'rgba(0,0,0,0.4)',
            paddingTop: 25
        },
        label: {
            marginRight: 10,
            fontFamily: 'Regular',
            fontSize: 18
        },
        sliderTitle: {
            fontSize: 20,
            fontFamily: 'SemiBold',
            paddingTop: 10,
            textAlign: 'center',
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
        },
        expertContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 20,
            minHeight: '100%'
        },
    }
);
