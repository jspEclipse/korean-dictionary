'use client';
import { useState } from 'react';
import { data } from "@/data.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VocabCard from './VocabCard';

const ItemsPerPage = 24;

const FullCard = ({ selectedWord, onClose }) => {
    if (!selectedWord) return null;

    return (
        <div className="fixed bottom-0 right-0 z-20 m-5 h-[35vh] w-[40vh]">
            <Card className="min-h-full relative">
                <CardHeader>
                    <CardTitle>{selectedWord.Vocab}</CardTitle>
                    <CardDescription>{selectedWord["Vocab-English"]}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p><strong>Romanization:</strong> {selectedWord["Vocab-Rom"]}</p>
                    <p><strong>Sentence:</strong> <span dangerouslySetInnerHTML={{ __html: selectedWord["Sentence"] || "N/A" }} /></p>
                    <p><strong>Sentence Romanization:</strong> {selectedWord["Sentence-Rom"] || "N/A"}</p>
                    <p><strong>Sentence Translation:</strong> {selectedWord["Sentence-English"] || "N/A"}</p>
                </CardContent>
                <Button 
                    className="absolute top-2 right-2 border px-2 py-1" 
                    onClick={onClose}
                >
                    Close
                </Button>
            </Card>
        </div>
    );
};


const WordList = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedWord, setSelectedWord] = useState(null);
    const [isFullCardVisible, setIsFullCardVisible] = useState(false);

    const filteredData = data.filter((item) => {
        const korean = item.Vocab ? String(item.Vocab) : "";
        const english = item["Vocab-English"] ? String(item["Vocab-English"]).toLowerCase() : "";
        const romanization = item["Vocab-Rom"] ? String(item["Vocab-Rom"]).toLowerCase() : "";

        return (
            search === "" ||
            korean.includes(search) ||
            english.includes(search.toLowerCase()) ||
            romanization.includes(search.toLowerCase())
        );
    });

    const totalPages = Math.ceil(filteredData.length / ItemsPerPage);
    const startIndex = (currentPage - 1) * ItemsPerPage;
    const endIndex = startIndex + ItemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return (
        <div>
            {isFullCardVisible && <FullCard selectedWord={selectedWord} onClose={() => setIsFullCardVisible(false)} />}
            <Input 
                onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1);
                }} 
                className="w-48 h-9 my-4 bg-white" 
                placeholder="Search..."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {paginatedData.map((item) => (
                    <button
                        key={item.Order}
                        className="w-full p-0 border-0 text-left"
                        onClick={() => {
                            setSelectedWord(item);
                            setIsFullCardVisible(true);
                        }}
                    >
                        <VocabCard 
                            vocab={item.Vocab} 
                            roman={item["Vocab-Rom"]} 
                            eng={item["Vocab-English"]} 
                        />
                    </button>
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination className="mt-4 mb-8">
                    <PaginationContent>
                        <PaginationItem>
                            <Button
                                variant="outline"
                                disabled={currentPage == 1} 
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            >
                                Previous
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <span className="px-4">{currentPage} / {totalPages}</span>
                        </PaginationItem>
                        <PaginationItem>
                            <Button 
                                variant="outline"
                                disabled={currentPage === totalPages} 
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            >
                                Next
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
};

export default WordList;
