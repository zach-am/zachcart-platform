import React from 'react';
import { PageHeader } from './PageHeader';
import { HELP_TOPICS, IconSearch, IconSparkles, IconWarning } from '../constants';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const HelpCenterPage: React.FC = () => {
    return (
        <div className="p-6 max-w-7xl mx-auto">
            <PageHeader title="Help Center" description="How can we help you today?" />

            <div className="relative mb-8">
                <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                    type="text" 
                    placeholder="Search for questions, tutorials, or issues..." 
                    className="h-auto rounded-xl border-gray-200 py-4 pl-12 pr-4 text-lg shadow-sm focus-visible:ring-teal-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    {HELP_TOPICS.map((section, idx) => (
                        <Card key={idx} className="overflow-hidden rounded-xl border-gray-200 shadow-sm">
                            <div className="p-6 border-b border-gray-100 flex items-center gap-3 bg-gray-50">
                                <div className="p-2 bg-white rounded-lg shadow-sm text-teal-600">
                                    <section.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg">{section.category}</h3>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {section.topics.map((topic, tIdx) => (
                                    <div key={tIdx} className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group">
                                        <h4 className="font-medium text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{topic.question}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{topic.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="space-y-6">
                    {/* Video Tutorials Card */}
                    <Card className="rounded-xl border-gray-200 shadow-sm">
                        <CardContent className="p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Video Tutorials</h3>
                        <div className="space-y-4">
                            <div className="group cursor-pointer">
                                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-2">
                                    <img src="https://picsum.photos/seed/video1/400/225" alt="Tutorial" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-teal-600 border-b-[6px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">3:45</span>
                                </div>
                                <p className="font-medium text-gray-800 text-sm group-hover:text-teal-600">How to bulk publish products</p>
                            </div>
                             <div className="group cursor-pointer">
                                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-2">
                                    <img src="https://picsum.photos/seed/video2/400/225" alt="Tutorial" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-teal-600 border-b-[6px] border-b-transparent ml-1"></div>
                                        </div>
                                    </div>
                                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">2:15</span>
                                </div>
                                <p className="font-medium text-gray-800 text-sm group-hover:text-teal-600">Configuring delivery fees</p>
                            </div>
                        </div>
                        </CardContent>
                    </Card>

                    {/* Support Actions */}
                    <Card className="rounded-xl border-gray-200 bg-gray-50 text-center">
                        <CardContent className="p-6">
                        <p className="text-sm text-gray-500 mb-4">Didn't find what you were looking for?</p>
                        <Button className="mb-3 h-auto w-full gap-2 bg-teal-600 py-3 font-bold text-white shadow-sm hover:bg-teal-700">
                            <IconSparkles className="w-4 h-4" />
                            Chat with Support (AI)
                        </Button>
                        <Button variant="outline" className="h-auto w-full gap-2 border-gray-300 bg-white py-3 font-bold text-gray-700 shadow-none hover:bg-gray-50">
                            <IconWarning className="w-4 h-4 text-orange-500" />
                            Report an Issue
                        </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
