'use client'
import { useState } from 'react'
import { data } from "@/data.js";
import { Input } from "@/components/ui/input"
import VocabCard from './VocabCard';

const WordList = () => {
    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <div>
            <Input onChange={(e) => setSearch(e.target.value)} className="w-48 h-6" placeholder="Search..."/>
            <div className="grid grid-cols-3 gap-1">
                {data.filter((item) => {
                        const korean = item.Vocab ? String(item.Vocab) : "";
                        const english = item["Vocab-English"] ? String(item["Vocab-English"]).toLowerCase() : "";
                        const romanization = item["Vocab-Rom"] ? String(item["Vocab-Rom"]).toLowerCase() : "";
                
                        return (
                            search === "" ||
                            korean.includes(search) ||
                            english.includes(search.toLowerCase()) ||
                            romanization.includes(search.toLowerCase())
                        );
                    }).slice(0,40).map((item) => (
                        <VocabCard key={item.Order} vocab={item.Vocab} roman={item["Vocab-Rom"]} eng={item["Vocab-English"]}/>
                    ))}
            </div>
        </div>
    );
};

export default WordList;
